import math


def score(x, y):
    radius = math.sqrt(x**2 + y**2)

    inner_circle_radius = 1
    middle_circle_radius = 5
    outer_circle_radius = 10

    if radius <= inner_circle_radius:
        return 10

    if radius <= middle_circle_radius:
        return 5

    if radius <= outer_circle_radius:
        return 1

    return 0
