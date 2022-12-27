# Write a program to find all pairs of integers whose sum is equal to a given number.

# Brute-Force: Complexity -> O(n square)
def find_pairs(x: list, n: int) -> list:
    pairs = []
    for i in range(len(x)):
        for j in range(i+1, len(x)):
            sum = x[i] + x[j]
            
            #If the pair is not distinct we won't consider it as a valid pair. 
            #For Example, [3,3] would not be valid pair.
            if x[i] == x[j]:
                continue
            elif sum == n:
                pairs.append(x[i])
                pairs.append(x[j])
                print(f'The pair indexes are {i} and {j}')
    
    return pairs            
                
my_list = [2, 6, 3, 9, 11]

if __name__ == '__main__':
    print(f'The pair are {find_pairs(my_list, 9)}') 