# forum.js

MongoDB Database Management Functions
This README document explains the various functions provided in the Node.js module for managing our MongoDB in the database named "forum". For more information on the database by itself, consult the alternative md file regarding the database design. These functions are designed to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database for nearly most of our pages.

## Dependencies
- `mongodb`: MongoDB driver for Node.js.
Note here that for any developers, they either need to be instantiating a new database using their own MONGODB_URI, or email lablink team through the contact form for a credential accessed. Terms and conditions may apply.

## Functions

### `async connectToDb()`
**Description**: Establishes a connection to the MongoDB database.
- **Parameters**: None.
- **Returns**: None.
- **Exceptions**: Logs error if the connection fails. This is used everywhere in our applications.

### `async addDocument(collectionName, res, data)`
**Description**: Adds a new document (which can be: user posting richdata, a professor profile, etc.) to a specified collection.
- **Parameters**:
  - `collectionName`: The name of the collection to add the document to.
  - `res`: The response object from the server.
  - `data`: The data to be added to the collection.
- **Returns**: None.
- **Operations**: Inserts a new document into the specified collection.

### `async deleteDocument(collectionName, res, filter)`
**Description**: Deletes a document from a specified collection.
- **Parameters**:
  - `collectionName`: The name of the collection to delete the document from.
  - `res`: The response object from the server.
  - `filter`: The criteria to find the document to be deleted.
- **Returns**: JSON response confirming the deletion.

### `async getDocuments(collectionName, res, filter = {})`
**Description**: Retrieves documents from a specified collection.
- **Parameters**:
  - `collectionName`: The name of the collection to retrieve documents from.
  - `res`: The response object from the server.
  - `filter`: The criteria to filter the documents (optional).
- **Returns**: JSON response with the retrieved documents.

### `async modifyDocument(collectionName, res, filter, updateData)`
**Description**: Modifies a document in a specified collection.
- **Parameters**:
  - `collectionName`: The name of the collection where the document is located.
  - `res`: The response object from the server.
  - `filter`: The criteria to find the document to be updated.
  - `updateData`: The data to be updated in the document.
- **Returns**: JSON response based on the result of the update operation.

### `module.exports = async (req, res)`
**Description**: Main request handler function.
- **Operations**:
  - Handles different HTTP methods (`GET`, `POST`, `DELETE`, `PATCH`).
  - Note that `GET` is for getDocuments, `POST` is for addDocument, `DELETE` is for deletion and `PATCH` is for modify.
  - If you have any other header it will most likely break.
  - Some print statements (console.log) is there to help the technical team with further improvement. You may wish to remove them.

## Usage
- For vercel deployment: you should keep it as it is. And call them following the samples from the "Forum.js", which by far is the best developed page based on this notion. Other cases in which usage of CRUD has been involved is the "Application.js" page and "SingleProf.js" page. 

## Error Handling
- All functions include try-catch blocks for error handling.
- Errors are logged to the console and sent in the response where applicable.



# news.js

## Dependencies
- `mongodb`: MongoDB driver for Node.js.
Note here that for any developers, they either need to be instantiating a new database using their own MONGODB_URI, or email lablink team through the contact form for a credential accessed. Terms and conditions may apply.

## Functions
This is a simple function created at the earlier history of the API creation. It is very suitable for some quick imports from the news collection under the database specified.