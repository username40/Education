digits = [0,1,2,3,4,5,6,7,8,9,10]

# slice your list from index 2 to index 4 and finish before 4
digits2 = digits[2:4]
print(digits2)

# 3rd operator is step
digits3 = digits[::2]
print(digits3)

# this means that move from the end!
# from left to right indexing begins from 0, from right to left indexing begins from -1
digits4 = digits[-2]
print(digits4)

digits5 = digits[::-1]
print(digits5)