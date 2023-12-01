const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

module.exports = async (req, res) => {
    try {
        // Connect to the MongoDB client
        await client.connect();
        const data = req.body;

        // Define the query to check if a user already exists
        const findOneQuery = { user: data.user};
        const collection = client.db('myDatabase').collection('verify');
        const findOneResult = await collection.findOne(findOneQuery);

        // If a user with the given fields already exists, send an error response
        if (findOneResult) {
            res.status(400).send('User already sent code');
        } else {
            const insertResult = await collection.insertOne(data);
            res.status(200).send("Code documented");
        }
    } catch (error) {
        res.status(500).send(`Error verifying user: ${error.message}`);
    } finally {
        // Close the connection
        await client.close();
    }
};
