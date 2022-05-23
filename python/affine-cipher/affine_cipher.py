

unicode_alphabet_uppercase_start = 65
unicode_alphabet_lowercase_start = 97
m = 26


def encode_letter(letter: str, a, b):
    if letter == " ":
        return ""

    i = ord(letter.upper())-unicode_alphabet_uppercase_start

    encoded_num = ((a*i) + b) % m

    return chr(encoded_num+unicode_alphabet_lowercase_start)


def decode_letter(letter: str, a, b):

    decoded_num = (a ** (-1))(letter - b) % m

    return chr(decoded_num+unicode_alphabet_uppercase_start)


def encode(plain_text, a, b):
    return "".join([encode_letter(letter, a, b) for letter in plain_text])


def decode(ciphered_text, a, b):
    pass
    # return "".join([decode_letter(letter, a, b) for letter in ciphered_text])


print(encode("mindblowingly", 11, 15))
# print(decode("ybty", 5, 7))
