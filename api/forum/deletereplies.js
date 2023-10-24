const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
module.exports = async (req, res) => {
    try {

        await client.connect();
        const collection = client.db('forum').collection('replies');

        const allDocuments = await collection.find({}).toArray();

        if (allDocuments.length === 0) {
            console.log("No documents found.");
            res.status(201).send("OK");
        } else {
            const data = req.body;
            const { netid, postid, replyid, replycontent } = data;
            const filter = { netid, postid, replyid }; 
            const update = { 
                  $set: { replycontent } 
                };
            console.log("OK present to server");
            console.log(data);
            const deletion = await collection.updateOne(filter, update);
            console.log(deletion.deletedCount);
            if (deletion.deletedCount == 0){
                console.log("Perhaps unauthorized deletion");
                res.status(403).send("Mal");
            }
            else{
                console.log("OK delete one");
            //console.log(`Found ${allDocuments.length} documents.`);
                res.status(200).send("OK"); 
            }
        }

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error retrieving data');
    }
};
