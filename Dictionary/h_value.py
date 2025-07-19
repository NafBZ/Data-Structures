# Key with the Highest Value
# Define a function which takes a dictionary as a parameter and returns the key with the highest value in a dictionary.

# Example:
# my_dict = {'a': 5, 'b': 9, 'c': 2}
# max_value_key(my_dict))

# Output:
# b


def max_value_key(my_dict):
    counter = 0
    final_key = list(my_dict.keys())[0]
    for key, value in my_dict.items() :
        if value > counter:
            counter = value
            final_key = key
    
    return final_key


# Second method
def max_value_key_sec(my_dict):
    return max(my_dict, key=my_dict.get)


my_dict = {'a': 5, 'b': 9, 'c': 2}
print(max_value_key(my_dict))
print(max_value_key_sec(my_dict))