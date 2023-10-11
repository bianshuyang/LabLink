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
        const collection = client.db('myDatabase').collection('myCollection');
        const findOneResult = await collection.findOne(findUsername);

        // If a user with the given fields already exists, send an error response
        if (findOneResult !== null) {
            console.log("User already registered.");
            res.status(400).send('User already registered');
        } else {
            // Insert the new user's data into the collection
            const insertResult = await collection.insertOne(data);
            console.log("Yes~")
            res.status(201); // 201 means "Created"
        }

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error registering user');
    }
};
