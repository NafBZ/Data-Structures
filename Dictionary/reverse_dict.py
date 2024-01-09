# Reverse Key-Value Pairs
# Define a function which takes as a parameter dictionary and returns a dictionary in which everse the key-value pairs are reversed.

# Example:
# my_dict = {'a': 1, 'b': 2, 'c': 3}
# reverse_dict(my_dict)

# Output:
# {1: 'a', 2: 'b', 3: 'c'}

# First method - Space Complexity: O(n)
# Time Complexity: O(n)
def reverse_dict(my_dict):
    new_dict = {}
    for key, value in my_dict.items():
        new_dict[value] = key
        
    return new_dict

# Second method - Space Complexity: O(1)
# Time Complexity: O(n)
def reverse_dict_s(my_dict):
    for key, value in my_dict.items():
        del my_dict[key]
        my_dict[value] = key
        
    return my_dict

my_dict = {'a': 1, 'b': 2, 'c': 3}
print(reverse_dict(my_dict))
print(reverse_dict_s(my_dict))