const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


module.exports = async (req, res) => {
    try {
        const data = req.body;
        await client.connect();
        const collection = client.db('myDatabase').collection('contactCollection');
        const insertResult = await collection.insertOne(data);
        res.status(201).send("OK");
    } catch (error) {
        res.status(500).send('Error registering user');
    }
};
