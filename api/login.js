const { MongoClient, ServerApiVersion } = require('mongodb');



const uri = process.env.MONGODB_URI;



const client = new MongoClient(uri);


module.exports = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const findOneQuery = { field1: data.field1, field2: data.field2};
        await client.connect();
        const collection = client.db('myDatabase').collection('myCollection');
        const findOneResult = await collection.findOne(findOneQuery);

        if (findOneResult === null) {
            console.log("Document not found.");
            res.status(404).send('Document not found');
        } else {
            console.log(`Found a document:\n${JSON.stringify(findOneResult)}\n`);
            res.status(200).json(findOneResult);
        }

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error checking data');
    }
};