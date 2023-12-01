# API Connection for User Registration

The provided code is a Node.js server-side script for handling user registration requests and storing new user data in a MongoDB database.

## Dependencies

The script uses the following dependencies:

```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');
```
MongoClient: This is the MongoDB driver for Node.js, allowing communication with a MongoDB database.
ServerApiVersion: It specifies the version of the MongoDB server API.

## MongoDB Connection URI and Client Initialization

```javascript
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
```

uri: Connection string for connecting to the MongoDB database, fetched from the environment variable MONGODB_URI.
client: MongoDB client instance created using the provided URI.

## API Endpoint

```javascript
module.exports = async (req, res) => {
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
    // Define the query to check if a user already exists
    const findOneQuery = { field1: data.field1, field2: data.field2 };
    const findUsername = { field1: data.field1 };
    await client.connect();

    const collection = client.db('myDatabase').collection('myCollection');
    const findOneResult = await collection.findOne(findUsername);
}
```
Retrieves the data from the request body. Assumes the request contains fields `field1` and `field2`, representing user registration details.

findOneQuery: Checks if a user with the given `field1` and `field2` already exists.
findUsername: Checks if a user with the given `field1` already exists.

Connects to the MongoDB database.

Specifies the target collection (`myCollection`) within the specified database (`myDatabase`). Executes a query to find a user with the provided `field1`.

### If-Else Block
```javascript
    // If a user with the given fields already exists, send an error response
    if (findOneResult !== null) {
        res.status(400).send('User already registered');
    } else {
        const insertResult = await collection.insertOne(data);
        res.status(200).send("User created"); // 200 means "OK"
    }
```
Checks if a user with the given `field1` already exists. If found, sends a response with a status code of 400 ("Bad Request") and a message indicating that the user is already registered.

If the user does not already exist, inserts the new user's data into the collection and sends a response with a status code of 200 ("OK") and a message indicating that the user was created.

### Catch Block
```javascript
  catch (error) {
    res.status(500).send('Error registering user');
  }
```

Catches any errors that occur during the try block and sends a response with a status code of 500 ("Internal Server Error") and an error message.
