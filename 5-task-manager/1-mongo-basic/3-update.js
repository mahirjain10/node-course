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

        db.collection('users').updateOne({
            _id:new ObjectId("6256ce217d586410c03681eb")
        },{
            $set:{
                name:"neel"
            }
        }).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })
    }
})