list_a = [1, 2, 3, 5, 8, 10, 14]

def binary_search(lst, number):
    low = 0
    high = len(lst)-1
    
    while low <= high:
        mid = (low+high)//2
        guess = lst[mid]

        if guess == number:
            return mid
        
        if guess > number:
            high = mid - 1
        else:
            low = mid + 1
        
    return None


print(binary_search(list_a, 7))            
