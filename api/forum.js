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

async function modifyDocument(collectionName, res, filter, updateData) {
    await connectToDb();
    const collection = client.db('forum').collection(collectionName);
    const updateResult = await collection.updateOne(filter, { $set: updateData });

    if (updateResult.modifiedCount === 0) {
        res.status(404).json({ message: "No documents matched the filter. No changes made." });
    } else {
        res.status(200).json({ message: "Document updated successfully!" });
    }
}


module.exports = async (req, res) => {
    try {
        const { method, body, query } = req;
        console.log(method);
        console.log(body);
        console.log(query);
        switch (method) {
            case 'GET':
                console.log(method);
                console.log(body);
                console.log(query);
                if (query.dataType) {
                    const documents = await getDocuments(query.dataType, res);
                    return res.status(200).json(documents);
                }
                break;
            
            case 'POST':
                await addDocument(body.collectionName, res, body);
                return res.status(200).json({ message: "Document added successfully!" });
            
            case 'DELETE':
                await deleteDocument(body.collectionName, res, body);
                return res.status(200).json({ message: "Document deleted successfully!" });
            
            default:
                return res.status(400).json({ error: 'Invalid request method!' });
        }

    } catch (error) {
        console.error("Error handling the request:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

