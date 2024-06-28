def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    numbers = []
    words = []

    for line in lines:
        parts = line.split()
        numbers.append(int(parts[0]))
        words.append(parts[1])

    numbers.sort()

    message = ''
    i = 0
    for number in numbers:
        if number == numbers[i]:
            message += words[i] + ' '
            i += 1

    return message.strip()

message = decode('coding_qual_input.txt')