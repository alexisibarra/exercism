def factors(value):
    prime_factors = []
    divisor = 2

    while divisor <= value:
        if value % divisor == 0:
            prime_factors.append(divisor)
            value /= divisor
        else:
            divisor += 1

    return prime_factors
