import csv
from pymongo import MongoClient

uri = "mongodb+srv://huskynp:PhFF18gXDMV01On9@people.vazx1.mongodb.net/?retryWrites=true&w=majority&authSource=admin"
client = MongoClient(uri)

db = client.people
collection = db['people']

peoples = []

# open people.csv
with open('people.csv', 'r', encoding='utf8') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        dict = {'id': row[0], 'name': row[1], 'description': row[2], 'gender': row[3], 'country': row[4].split(
            ';'), 'job': row[5], 'born': row[6], 'died': row[7], 'death-reason': row[8], 'age': row[9]}

        print(dict['name'])
        peoples.append(dict)

collection.insert_many(peoples)
