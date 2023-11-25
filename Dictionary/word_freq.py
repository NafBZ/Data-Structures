# Define a function to count the frequency of words in a given list of words.
# Example:

# words = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple']
# count_word_frequency(words)

# Output:
# {'apple': 3, 'orange': 2, 'banana': 1}


def count_word_frequency(words):
    freq = {}
    for word in words:
        if word not in freq:
            freq[word] = 1
        else:
            freq[word] = freq[word] + 1

    return freq


words = ["apple", "orange", "banana", "apple", "orange", "apple"]
print(count_word_frequency(words))
