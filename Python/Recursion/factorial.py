# n! = n*(n-1)*(n-2)*...... *2*1

def factorial(n):
    if n == 0 or n == 1:  # base case or stopping condition
        return 1
    elif n == 2:          # reducing a recursive call
        return 2
    else:
        return n*factorial(n-1)


print(factorial(3))

# The answer should be 6
