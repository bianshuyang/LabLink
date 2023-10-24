const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
module.exports = async (req, res) => {
    try {

        await client.connect();
        const collection = client.db('forum').collection('threads');

        const allDocuments = await collection.find({}).toArray();

        if (allDocuments.length === 0) {
            console.log("No documents found.");
            res.status(201).json([]);
        } else {
            const data = req.body;
            const { netid, postid, postData } = data;
            const filter = { netid, postid }; 
            const update = { 
                  $set: { postData } 
                };
            console.log("OK ");
            console.log(data);
            const deletion = await collection.updateOne(filter, update);
            console.log(deletion.deletedCount);
            if (deletion.deletedCount == 0){
                console.log("Perhaps unauthorized deletion");
                res.status(403).json([]);
            }
            else{
                console.log("OK delete one");
            //console.log(`Found ${allDocuments.length} documents.`);
                res.status(200).json([]); 
            }
        }

    } catch (error) {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Error retrieving data');
    }
};
