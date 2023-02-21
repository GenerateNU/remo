# query from amazon books api
from amazon_paapi import AmazonApi

import redis
from redis import Redis
import boto3

class AmazonQuery():



    # Connect to Redis
    redis_client: Redis[bytes] = redis.Redis()

    # Connect to Amazon Product Advertising API
    amazon_client = boto3.client('sqs', region_name='us-west-2',
                                aws_access_key_id='YOUR_ACCESS_KEY_ID',
                                aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
                                aws_session_token='YOUR_SESSION_TOKEN')


    def ping_redis(self) -> None:
    # Loop indefinitely, processing each item in the Redis list
        while True:
            # Get the next item from the Redis list
            key, _ = AmazonQuery.redis_client.blpop(['titles_list'])
            search_query = key.decode()

            # Search Amazon with the query string
            search_results = AmazonQuery.amazon_client.search_items(Keywords=search_query)['SearchResult']['Items']

            # Print the top 5 search results
            for i, item in enumerate(search_results[:5]):
                print(f'{i+1}. {item["Title"]} ({item["ASIN"]})')

            # Add the search results to the Redis value for the key
            AmazonQuery.redis_client.set(key, '\n'.join([f'{item["Title"]} ({item["ASIN"]})' for item in search_results[:5]]))

