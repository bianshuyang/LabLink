const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

module.exports = async (req, res) => {
    console.log('1');
    try {
        const data = req.body;
        console.log(data);
        const findOneQuery = { user: data.user, code: data.code };
        await client.connect();
        const collection = client.db('myDatabase').collection('verify');
        const findOneResult = await collection.findOne(findOneQuery);
        console.log(findOneQuery);
        if (findOneResult === null) {
            console.log("Document not found.");
            res.status(404).send('Document not found');
        } else {
            console.log(`Found a document:\n${JSON.stringify(findOneResult)}\n`);
            //res.status(200).json(findOneResult);
            const deletion_for_code = await collection.deleteOne(findOneQuery);
            console.log('our mission of verification code is complete, so byebye');
            console.log(deletion_for_code);
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
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error checking data');
    }
};
