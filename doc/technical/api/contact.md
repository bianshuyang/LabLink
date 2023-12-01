# API Connection for Contact Page

The provided code is a Node.js server-side script for handling the contact form submissions and storing them in a MongoDB database.

## Dependencies

The script uses the following dependencies:

```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');
```
MongoClient: This is the MongoDB driver for Node.js, allowing communication with a MongoDB database.
ServerApiVersion: It specifies the version of the MongoDB server API.

## MongoDB Connection URI

```javascript
const uri = process.env.MONGODB_URI;
```
uri: It holds the connection string for connecting to the MongoDB database. The actual connection string is stored in the environment variable MONGODB_URI.

```javascript
const client = new MongoClient(uri);
```
Creates a new MongoDB client instance using the provided URI.

## API Endpoints
```javascript
module.exports = async (req, res) =>{
  //Try Block...
  //Catch Block
}
```
Exports an asynchronous function as the module. This function handles HTTP requests.

### Try Block
```javascript
try {
    const data = req.body;
    await client.connect();
    const collection = client.db('myDatabase').collection('contactCollection');
    const insertResult = await collection.insertOne(data);
    res.status(201).send("OK");
}
```
Retrieves the data from the request body. Assumes that the incoming data is in JSON format and logs it to the console.

Connects to the MongoDB database using the previously defined client.

Specifies the target collection (contactCollection) within the specified database (myDatabase).

Inserts the received data into the MongoDB collection and stores the result in insertResult.

If the insertion is successful it sends a response with a status code of 201 ("Created") and a message "OK".

### Catch Block
```javascript
 catch (error) {
    res.status(500).send('Error registering user');
 }
```

Catches any errors that occur during the try block and sends a response with a status code of 500 ("Internal Server Error") and an error message.
