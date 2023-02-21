import nltk
from collections import Counter
from itertools import combinations
from operator import mul
from functools import reduce


class PredictTitle():
    def __init__(self, words) -> None:
        self.words = words
        self.freqs = None

    def load_corpus_freqs(self):
        # Load a corpus of text
        nltk.download('webtext')
        corpus = nltk.corpus.webtext.words()

        # Count the frequency of each word in the corpus
        self.freqs: Counter = Counter(corpus)

    def most_likely_combos(self, num_combos = 5) -> dict:
        # Generate sall combinations of the candidate words
        combos: list =  list(combinations(self.words, len(self.words)))
         # Calculate a score for each combination
        scores: dict = {}
        for c in combos:
            score = reduce(mul, [self.freqs[w] for w in c], 1)
            scores[c] = score

        # Select the combination with the highest score
        return sorted(scores, key=scores.get)[:num_combos]
