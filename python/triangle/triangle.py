def is_a_triangle(sides):
    [a, b, c] = sides

    all_sides_have_length = a > 0 and b > 0 and c > 0
    sides_rules = a + b >= c and b + c >= a and a + c >= b

    return all_sides_have_length and sides_rules


def equilateral(sides):
    [a, b, c] = sides

    return is_a_triangle(sides) and a == b == c


def isosceles(sides):
    [a, b, c] = sides

    return is_a_triangle(sides) and (a == b or a == c or b == c)


def scalene(sides):
    [a, b, c] = sides

    return is_a_triangle(sides) and a != b and a != c and b != c
