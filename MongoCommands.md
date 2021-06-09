### Usa database sliit
```
use sliit
```
### Create collection lab_3
```
db.createCollection("lab_3")
```
### Insert document
```
db.lab_3.insertOne({
  "name": "John",
  "dateOfBirth": "1990-01-01T00:00:00Z",
  "subjects": ["Application frameworks", "Computer architecture"]
})
```
### Find document by 'name'
```
db.lab_3.find({name: "John"})
```
### Find document by 'id'
```
db.lab_3.find({"_id": ObjectId("603fe239ea4e1d3010b67a8a")})
```
### Add ‘Distributed Computing’ to the subjects list
```
db.lab_3.updateOne({"name": "John"},{$push:{"subjects": "Distributed computing"}})
```
### Add the 2 document to the lab_3 collection
```
db.lab_3.insertMany([{
  "name": "Smith",
  "dateOfBirth": "1990-01-15T00:00:00Z",
  "subjects": ["Application frameworks", "Computer architecture"],
  "isActive": true
},
{
  "name": "Jane",
  "dateOfBirth": "1990-02-15T00:00:00Z",
  "subjects": ["Application frameworks", "Computer architecture"],
  "isActive": "false"
}])
```
###  Find the document with the name ‘Smith’ and isActive flag is true and add Distributed computing to subjects
```
db.lab_3.updateOne({"name": "Smith", "isActive": true},{$push: {"subjects": "Distributed computing"}})
```
### Update the first document ‘isActive’ to false
```
db.lab_3.updateOne({"name": "John"},{$push: {"isActive": false}})
```
###  Remove the first document created
```
db.lab_3.deleteOne({"name": "John"})
```
