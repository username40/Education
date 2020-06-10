# modules
# you can install modules from standard library
import random

print(random.randint(0, 100))

for i in range(10):
  print(random.randint(0, 100))

# also you can install only one something
from random import randint

print(randint(100, 1000))

# it means you install all but i don't understand because you can just type import random
from random import *

# also you can install something and rename it for avoiding conflicts
from random import randint as veryRandomNumber

print(veryRandomNumber(1000, 10000))