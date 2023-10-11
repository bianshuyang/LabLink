const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = process.env.MONGODB_URI;

console.log(uri);
const client = new MongoClient(uri);


module.exports = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        await client.connect();
        const collection = client.db('myDatabase').collection('contactCollection');
        const insertResult = await collection.insertOne(data);
        console.log("Yes~");
        res.status(201); // 201 means "Created"

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error registering user');
    }
};
