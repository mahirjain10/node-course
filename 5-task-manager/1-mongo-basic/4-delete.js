const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionUrl, { useNewUrlParser:true }, (error, client) => {
    if (error) {
        console.log(error);
    }
    else{
        console.log("connected");
        const db=client.db(databaseName);
        db.collection('users').deleteOne({
            _id:new ObjectId("6257cbd1fde9d8243067b984")
        }).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })
    }
})