const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const secretKey = process.env.JWT_SECRET
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    try {
        const data = req.body;
        const findOneQuery = { field1: data.field1, field2: data.field2};
        await client.connect();
        const collection = client.db('myDatabase').collection('myCollection');
        const findOneResult = await collection.findOne(findOneQuery);

        if (findOneResult === null) {
            res.status(404).send('Document not found');
        } else {
            if (findOneResult.status === "verified") {
                const expiresIn = '7 days';
                const token = jwt.sign({ netID: data.field1 }, secretKey, { expiresIn });
                res.status(200).json({
                  findOneResult: findOneResult,
                  token: token
                });
            } else {
                res.status(203).send("Document found, but status is not 'verified'");
            }
        }

    } catch (error) {
        res.status(500).send('Error checking data');
    }
};
