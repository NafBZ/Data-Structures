# Define a function with takes two dictionaries as parameters and merge them and sum the values of common keys.
# Example:

# dict1 = {'a': 1, 'b': 2, 'c': 3}
# dict2 = {'b': 3, 'c': 4, 'd': 5}

# merge_dicts(dict1, dict2)

# Output:
# {'a': 1, 'b': 5, 'c': 7, 'd': 5}


def merge_dicts(dict1, dict2):
    result_dict = dict1.copy()

    for key, value in dict2.items():
        if key in result_dict:
            result_dict[key] += value
        else:
            result_dict[key] = value

    return result_dict


dict1 = {"a": 1, "b": 2, "c": 3}
dict2 = {"b": 3, "c": 4, "d": 5}
print(merge_dicts(dict1, dict2))
