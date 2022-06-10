#Find the sum of digits of a positive integer
import math

#Iterative way
def sumOfDigits(n):
    assert n > 0 and int(n) == n, 'The given number must be a positive integer!' #edge case
    sum = 0
    while n > 0:
        sum += n%10
        n = int(n/10)
    return sum

#Recursive Way
def recursive_sumOfDigits(n):
    assert n >= 0 and int(n) == n, 'The given number must be a positive integer!' #edge case
    if n == 0:
        return n
    else:
        return int(n%10) + recursive_sumOfDigits(int(n/10))

#print(sumOfDigits(170))
print(recursive_sumOfDigits(373))