const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);


module.exports = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        // Define the query to check if a user already exists
        const findOneQuery = { field1: data.field1, field2: data.field2};
        const findUsername = {field1:data.field1};
        await client.connect();
        const collection = client.db('forum').collection('threads');
        const insertResult = await collection.insertOne(data);
        console.log("OK Sent")
        res.status(200); // 201 means "Created"

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error registering user');
    }
};
