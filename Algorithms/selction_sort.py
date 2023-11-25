def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0
    
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
            
    return smallest_index


def selection_sort(arr):
    arr_new = []
    for _ in range(len(arr)):
        smallest = find_smallest(arr)
        arr_new.append(arr.pop(smallest))
    return arr_new

print(selection_sort([5, 13, 36, 44, 10]))