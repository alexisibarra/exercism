

def is_palindrome(number):
    return str(number) == str(number)[::-1]


def validate_input(min_factor, max_factor):
    if(min_factor > max_factor):
        raise ValueError("min must be <= max")


def palindrome_products(products, factors):
    for product in products:
        if is_palindrome(product):
            pairs = []

            for i in factors:
                j, rem = divmod(product, i)
                if rem == 0 and j in factors:
                    pairs.append([i, j])

            if len(pairs) != 0:
                return (product, pairs)

    return (None, [])


def smallest(max_factor, min_factor):
    validate_input(min_factor, max_factor)

    factors = range(min_factor, max_factor + 1)
    products = range(pow(min_factor, 2), pow(max_factor, 2) + 1)

    return palindrome_products(products, factors)


def largest(max_factor, min_factor):
    validate_input(min_factor, max_factor)

    factors = range(min_factor, max_factor + 1)
    products = range(pow(max_factor, 2), pow(min_factor, 2) - 1, -1)

    return palindrome_products(products, factors)
