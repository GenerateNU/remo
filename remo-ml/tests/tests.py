import unittest


def longest_common_prefix(words)-> str:
    words: list = sorted(words)
    if len(words) == 0:
        return ""
    if len(words) == 1:
        return words[0]
    
    longest:str = ""
    for i, c in enumerate(words[0]):

        # check if every list element contains the same letter at the same position
        if all(words[j][i]==c for j in range(1,len(words))):
            longest+=c
        else:
            break

    return longest

def longest_common_suffix(words)-> str:
    words:list = sorted(words)

    if len(words) == 0:
        return ""
    
    if len(words) == 1:
        return words[0]

    longest: str = ""
    for i in range(0, len(words[0]), -1):
        check:list = [words[0][i]]
        for j in range(1, len(words)):
            if words[j][i] == check[0]:
                check.append(words[j][i])
            
        if len(check)==len(words):
            longest+=check[0]

    return longest





#Source: https://stackoverflow.com/questions/58598805






# class Test(unittest.TestCase):

#     def test_prefix(self):
#         assert(longest_common_prefix(['hell', 'helloworld']), 'hell')

if __name__ == '__main__':
    # unittest.main()
    print(longest_common_suffix(['brian', 'brain']))