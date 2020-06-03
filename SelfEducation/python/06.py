# double conditions

weather = 'Rain'
dayTime = 'Night'

# Use operator and
if weather == 'Rain' and dayTime == 'Night':
  print('#stayhome')

# Use operator or
if weather == 'Rain' and ( dayTime == 'Day' or dayTime == 'Evening' ):
  print('#stayhome')

if not weather == 'Rain':
  print(111)