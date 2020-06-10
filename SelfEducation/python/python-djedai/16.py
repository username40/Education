# None data type in python
# None - it's like empty
# Dictionary - it's like object in js
dict = {
  "key1": "value1",
  "key2": "value2",
}

print(dict["key1"])

# try:
#   print(dict["test_key"])
# except keyError:
#   print("There in key with this name")

contacts = {
  "mom": "+7922222222",
  "bro": "+7922222222",
  "wife": "+7922222222"
}

testing = input("input name: ")

if testing in contacts:
  print(contacts[testing])
else:
  print('there is no matching contact')