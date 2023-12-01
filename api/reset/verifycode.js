const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

module.exports = async (req, res) => {
    try {
        const data = req.body;
        const findOneQuery = { user: data.user, code: data.code };
        await client.connect();
        const collection = client.db('myDatabase').collection('verify');
        const findOneResult = await collection.findOne(findOneQuery);
        if (findOneResult === null) {
            res.status(404).send('Document not found');
        } else {
            //res.status(200).json(findOneResult);
            const deletion_for_code = await collection.deleteOne(findOneQuery);
            // Modify the deleteOne function call here
            const collection2 = client.db('myDatabase').collection('myCollection');
            const deleteQuery = { "field1": data.user }; // This is the part that was modified
            const deletion = await collection2.deleteOne(deleteQuery);
            if (deletion.deletedCount){
                res.status(200).send("OK Proceed");
            }
            else{
                res.status(203).send("No new user should proceed to register, not here.")
            }
        }
    } catch (error) {
        res.status(500).send('Error checking data');
    }
};
