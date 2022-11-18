# How to find the missing number in an integer array of 1 to 100?

def find_miss(x : list) -> int:
    """Input should be a list of integers,
    returns an integer"""
    one_to_hundred = (100*101)/2 # Time Complexity -> O(1)
    list_sum = sum(x) # Time Complexity -> O(n)
    
    missing_number = one_to_hundred - list_sum # Time Complexity -> O(1)
    
    return int(missing_number)


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
           11, 12, 13, 14, 16, 17, 18, 19, 20,
           21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
           31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
           41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
           51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
           61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
           71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
           81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
           91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

#Driver Code
if __name__ == '__main__':
    print(find_miss(my_list))
    
    
#Time Complexity O(n)
#Output should be fifteen.