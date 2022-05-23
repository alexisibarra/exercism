class Luhn:
    def __init__(self, card_num):
        self.card_num = card_num

    def valid(self):
        try:
            stripped_card_num = [int(num)
                                 for num in self.card_num if num != ' ']
        except:
            return False

        if len(stripped_card_num) <= 1:
            return False

        odd_digits = stripped_card_num[-1::-2]
        even_digits = stripped_card_num[-2::-2]

        digits_sum = sum(odd_digits)

        for x in even_digits:
            digits_sum += 9 if x == 9 else (x*2) % 9

        return (digits_sum % 10) == 0
