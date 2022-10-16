# Theory --> n! = n*(n-1)*(n-2)*...... *2*1 

import sys
sys.setrecursionlimit(10000) #limit the number of recusive call. 

def factorial(n):
    assert n >= 0 and int(n) == n, 'The given number must be a non negative integer!' #edge case
    
    if n == 0 or n == 1:  #base case or stopping condition
        return 1
    elif n == 2:          #reducing a recursive call
        return 2
    else:
        return n*factorial(n-1) #recurive call


print(factorial(3))

# The answer should be 6
