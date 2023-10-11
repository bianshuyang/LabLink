const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
module.exports = async (req, res) => {
    try {
        await client.connect();
        const collection = client.db('myDatabase').collection('news');

        const allDocuments = await collection.find({}).toArray();

        if (allDocuments.length === 0) {
            console.log("No documents found.");
            res.status(404).send('No documents found');
        } else {
            console.log(`Found ${allDocuments.length} documents.`);
            res.status(200).json(allDocuments);
        }

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error retrieving data');
    }
};
