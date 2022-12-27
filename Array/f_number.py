#find a number in an array

import numpy as np
my_array = np.array([1, 2, 3, 4, 5, 6, 8, 9])

def find_number(array, value):
    for i in range(len(array)):
        if array[i] == value:
            return True
        
        
if find_number(my_array, 7):
    print("Exists")
else:
    print("Does not exist")