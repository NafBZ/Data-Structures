# finding the greatest common divisor of a number using recursive approach

def gcd(num1, num2):
    
    assert int(num1) == num1, 'The given number must be a non negative integer!' #edge case
    assert int(num2) == num2, 'The given number must be a non negative integer!' #edge case
    
    if num2 == 0:
        return num1             #edge case
    
    if num1 < 0:
        num1 = -1 * num1        #edge case
    
    if num2 < 0:
        num2 = -1 * num2        #edge case
        
    remainder = num1 % num2
    
    if remainder == 0:          #base case or stopping condition
        return num2
    else:
        return gcd(num2, remainder)
    
print(gcd(18,48))