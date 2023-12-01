# API Connection for User Registration Verification

The provided code is a Node.js server-side script for handling requests to verify and update the status of user registrations in a MongoDB database.

## Dependencies

The script uses the following dependencies:

```javascript
const { MongoClient } = require('mongodb');
```
MongoClient: This is the MongoDB driver for Node.js, allowing communication with a MongoDB database.

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
  //Finally Block...
}
```
Exports an asynchronous function as the module. This function handles HTTP requests.



### Try Block
```javascript
try {
    const data = req.body;
    const findOneQuery = { user: data.user, code: data.code };
    await client.connect();
    const collection = client.db('myDatabase').collection('verify');
    const findOneResult = await collection.findOne(findOneQuery);
}
```
Retrieves data from the request body. Assumes the request contains fields `user` and `code` representing the user and the verification code.

Establishes a connection to the MongoDB database.

Specifies the target collection (`verify`) within the specified database (`myDatabase`). Executes a query to find a document with the provided `user` and `code`.

### If-Else Block
```javascript
    if (findOneResult === null) {
        res.status(404).send('Document not found');
    } else {
        const deletion_for_code = await collection.deleteOne(findOneQuery);
        const collection2 = client.db('myDatabase').collection('myCollection');
        const updateQuery = { "field1": data.user };
        const updateData = { $set: { status: "verified" } };
        const updateResult = await collection2.updateOne(updateQuery, updateData);
        if (updateResult.modifiedCount > 0) {
          res.status(200).send("User status updated to 'verified'");
        } else {
          res.status(203).send("No user matching the criteria found.");
        }
    }
```
Checks if the document with the given `user` and `code` is not found. If so, sends a response with a status code of 404 ("Not Found") and a message indicating that the document was not found.

If the document is found, deletes it from the `verify` collection. Then, proceeds to update the status of the corresponding user document in the `myCollection` collection.

Modifies the `updateQuery` to target the user document using the `field1` field. Updates the `status` field to "verified" using the `$set` operator.

Checks if the update of the user document in `myCollection` was successful. If successful, sends a response with a status code of 200 ("OK") and a message indicating that the user status has been updated to "verified." Otherwise, sends a response with a status code of 203 ("Non-Authoritative Information") indicating that no user matching the criteria was found.

### Catch Block
```javascript
 catch (error) {
    res.status(500).send('Error checking data');
  }
```
Catches any errors that occur during the try block and sends a response with a status code of 500 ("Internal Server Error") and an error message.

```javascript
  finally {
    // Close the connection
    await client.close();
  }
```
Regardless of success or failure, the `finally` block ensures that the MongoDB client connection is closed.
