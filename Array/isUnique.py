#Check if all the elements of a list is unique or not

my_list  = [2, 4, 8, 12, 7, 9, 22, 24]

def is_unique(my_list):
    new_list = []
    for elements in my_list:
        if elements in new_list:
            return False
        else:
            new_list.append(elements)
            
    return True

print(is_unique(my_list))
