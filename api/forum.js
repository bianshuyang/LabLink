const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDb() {
    try {
        await client.connect();
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
}


async function addDocument(collectionName, res, data) {
    await connectToDb();
    const collection = client.db('forum').collection(collectionName);
    await collection.insertOne(data);
    res.status(200).json({ message: "Document added successfully!" });
}

async function deleteDocument(collectionName, res, filter) {
    await connectToDb();
    const collection = client.db('forum').collection(collectionName);
    const p = await collection.deleteOne(filter);
    res.status(200).json({ message: "Document deleted successfully!" });
}

async function getDocuments(collectionName, res, filter = {}) {
    await connectToDb();
    const collection = client.db('forum').collection(collectionName);
    const allDocuments = await collection.find({}).toArray();
    res.status(200).json(allDocuments);
}


module.exports = async (req, res) => {
    const { method, body } = req;
    const collectionName = req.query.collectionName;  // retrieve collection name from query parameters
    const addcollection = body.collectionName;
    // console.log(body.collectionName, "IS COLLEC??");
    switch (method) {
        case 'GET':
            await getDocuments(collectionName, res);
            break;
        case 'POST':
            await addDocument(addcollection, res, body);
            break;
        case 'DELETE':
            await deleteDocument(body.collectionName, res, body);
            break;
        default:
            res.status(400).json({ error: 'Invalid request method!' });
            break;
    }
};
