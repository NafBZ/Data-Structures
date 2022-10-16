#Power of a number

def power(base, exp):

    assert exp >= 0 and int(exp) == exp, 'The given number must be a non negative integer!' #edge case

    if exp == 0:
        return 1
    elif exp == 1:
        return base
    return base * power(base, exp-1)
    
print(power(2,2))