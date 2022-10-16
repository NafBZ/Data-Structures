def decimal_to_binary(n):
    if n == 0:
        return 0
    else:
        remainder = n%2
        n = int(n/2)
        return remainder + 10 * decimal_to_binary(n)


print(decimal_to_binary(13))