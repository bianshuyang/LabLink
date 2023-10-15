const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);


module.exports = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        await client.connect();
        const collection = client.db('forum').collection('replies');
        const insertResult = await collection.insertOne(data);
        console.log("OK replies")
        res.status(200); 
    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error registering user');
    }
};
