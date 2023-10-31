const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Connect to MongoDB once outside the function scope
client.connect();

module.exports = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        // Define the query to check if a user already exists
        const findOneQuery = { user: data.user};

        const collection = client.db('myDatabase').collection('verify');
        const findOneResult = await collection.findOne(findOneQuery); // Use findOneQuery instead of findUsername
        console.log(findOneResult);
        // If a user with the given fields already exists, send an error response
        if (findOneResult) {
            console.log("User already sent code.");
            res.status(400).send('User already sent code');
        } else {
            const insertResult = await collection.insertOne(data);
            console.log("Code documented");
            res.status(200).send("Code documented");
        }

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send(`Error verifying user: ${error.message}`); // More detailed error message
    } finally {
        // Close the connection (optional, based on your application's needs)
        client.close();
    }
};
