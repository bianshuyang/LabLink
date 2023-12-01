# API Connection for Login Page
The provided code is a Node.js server-side script for handling login requests, verifying user credentials against a MongoDB database, and issuing JSON Web Tokens (JWT) for authenticated users.

## Dependencies

The script uses the following dependencies:
```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken');
```
MongoClient: MongoDB driver for Node.js.
ServerApiVersion: Specifies the version of the MongoDB server API.
jwt: JSON Web Token library for Node.js.

## MongoDB Connection URI

```javascript
const uri = process.env.MONGODB_URI;
```
uri: It holds the connection string for connecting to the MongoDB database. The actual connection string is stored in the environment variable MONGODB_URI.

```javascript
const client = new MongoClient(uri);
```
Creates a new MongoDB client instance using the provided URI.

```javascript
const secretKey = process.env.JWT_SECRET;
```
secretKey: Secret key for signing JWTs, fetched from the environment variable JWT_SECRET.

## API Endpoints
```javascript
module.exports = async (req, res) =>{
  //Try Block...
    //If-Else Block...
  //Catch Block...
}
```
Exports an asynchronous function as the module. This function handles HTTP requests.

### Try Block
```javascript
try {
  const data = req.body;
  const findOneQuery = { field1: data.field1, field2: data.field2};
  await client.connect();
  const collection = client.db('myDatabase').collection('myCollection');
  const findOneResult = await collection.findOne(findOneQuery);
}
```

Retrieves the data from the request body. Assumes the request contains fields field1 and field2, representing user credentials.

Defines a MongoDB query to find a document with the provided credentials and connects to the MongoDB database.

Specifies the target collection (myCollection) within the specified database (myDatabase). Executes a query to find a document matching the provided credentials.

### If-Else Block
```javascript
if (findOneResult === null) {
    res.status(404).send('Document not found');
} else {
    if (findOneResult.status === "verified") {
        const expiresIn = '7 days';
        const token = jwt.sign({ netID: data.field1 }, secretKey, { expiresIn });
        res.status(200).json({
          findOneResult: findOneResult,
          token: token
        });
    } else {
        res.status(203).send("Document found, but status is not 'verified'");
    }
}
```
Checks if the query result is null. If so, sends a response with a status code of 404 ("Not Found") and a message indicating that the document was not found.

If the document is found and its status is "verified," generates a JWT with a 7-day expiration and sends a response with a status code of 200 ("OK") containing the document details and the generated token.

If the document is found but its status is not "verified," sends a response with a status code of 203 ("Non-Authoritative Information") indicating that the document was found but not verified.

### Catch Block

```javascript
catch (error) {
    res.status(500).send('Error checking data');
}
```
Catches any errors that occur during the try block and sends a response with a status code of 500 ("Internal Server Error") and an error message.
