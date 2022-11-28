def fibonacci(n):
    assert n >= 0 and int(n) == n, 'The given number must be a non negative integer!' #edge case
    
    if n in [0,1]: #base case or stopping condition
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2) #recursiv calls
    
print(fibonacci(4))