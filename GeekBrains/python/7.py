import random


# 1

class Matrix:
    def __init__(self, list_1, list_2):
        self.list_1 = list_1
        self.list_2 = list_2

    def __add__(self):
        matrixForm = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]

        for i in range(len(self.list_1)):

            for j in range(len(self.list_2[i])):
                matrixForm[i][j] = self.list_1[i][j] + self.list_2[i][j]

        return str('\n'.join(['\t'.join([str(j) for j in i]) for i in matrixForm]))

    def __str__(self):
        return str('\n'.join(['\t'.join([str(j) for j in i]) for i in matrixForm]))


my_matrix = Matrix([[5, 18, 11],
                    [6, 17, 23],
                    [41, 50, 9]],
                   [[45, 8, 2],
                    [6, 7, 93],
                    [24, 5, 97]])

print(my_matrix.__add__())


########################################################
########################################################

# 2

class Manufacture:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def get_square_c(self):
        return self.width / 6.5 + 0.5

    def get_square_j(self):
        return 2 * self.height + 0.3

    @property
    def get_sq_full(self):
        return str(f'Площадь общая ткани \n'
                   f' {(self.width / 6.5 + 0.5) + (2 * self.height + 0.3)}')


class Coat(Manufacture):
    def __init__(self, width, height):
        super().__init__(width, height)
        self.square_c = round(self.width / 6.5 + 0.5)

    def __str__(self):
        return f'Площадь на пальто {self.square_c}'


class Suit(Manufacture):
    def __init__(self, width, height):
        super().__init__(width, height)
        self.square_j = round(2 * self.height + 0.3)

    def __str__(self):
        return f'Площадь на костюм {self.square_j}'


coat = Coat(random.randint(1, 100), random.randint(1, 100))
suit = Suit(random.randint(1, 100), random.randint(1, 100))
print(coat)
print(suit)
