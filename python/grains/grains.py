import functools


def square(number):
    if number <= 0 or number > 64:
        raise ValueError("square must be between 1 and 64")

    return 2 ** (number-1)


def total():
    return functools.reduce(lambda x, y: x + square(y), range(1, 65))
