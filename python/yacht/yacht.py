# Score categories.
YACHT = 'YACHT'
ONES = 'ONES'
TWOS = 'TWOS'
THREES = 'THREES'
FOURS = 'FOURS'
FIVES = 'FIVES'
SIXES = 'SIXES'
FULL_HOUSE = 'FULL_HOUSE'
FOUR_OF_A_KIND = 'FOUR_OF_A_KIND'
LITTLE_STRAIGHT = 'LITTLE_STRAIGHT'
BIG_STRAIGHT = 'BIG_STRAIGHT'
CHOICE = 'CHOICE'

digits_categories_map = {
    "ONES": 1,
    "TWOS": 2,
    "THREES": 3,
    "FOURS": 4,
    "FIVES": 5,
    "SIXES": 6,
}


def count_digit(dice, digit):
    return len([item for item in dice if item == digit]) * digit


def score(dice, category):
    if(category == YACHT):
        return 50 if len(set(dice)) == 1 else 0

    if(category in digits_categories_map.keys()):
        return count_digit(dice, digits_categories_map[category])

    if(category == FULL_HOUSE):
        count = 0
        found_a_triplet = False
        found_a_duplet = False

        for digit in range(1, 7):
            digit_count = dice.count(digit)

            if digit_count == 3:
                count += 3*digit
                found_a_triplet = True

                if found_a_duplet:
                    return count

            if digit_count == 2:
                count += 2*digit
                found_a_duplet = True

                if found_a_triplet:
                    return count

        return 0

    if(category == FOUR_OF_A_KIND):
        for digit in range(1, 7):
            if dice.count(digit) >= 4:
                return digit*4

        return 0

    if(category == LITTLE_STRAIGHT):
        return 30 if sorted(dice) == [1, 2, 3, 4, 5] else 0

    if(category == BIG_STRAIGHT):
        return 30 if sorted(dice) == [2, 3, 4, 5, 6] else 0

    if(category == CHOICE):
        return sum(dice)
