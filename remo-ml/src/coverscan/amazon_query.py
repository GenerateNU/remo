# query from amazon books api
from amazon_paapi import AmazonApi


class AmazonQuery():

    def __init__(self, ACCESS_KEY, SECRET, ASSOC) -> None:
        try:
            self.amazon_connection = AmazonApi(ACCESS_KEY, SECRET, ASSOC)
        except Exception as e:
            e.printStackTrace()
    
    def load_redis():
        pass
    
    def search(self, book_name: str, author: str, query=None):
        results = self.amazon_connection.search(Keywords = "book name", SearchIndex = "Books")
        for item in results:
            print item.title, item.isbn, item.price_and_currency


