const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionUrl,{useNewurlParser:true},(error,client)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("connected successfully");
        const db=client.db(databaseName);

        //searching using id
        db.collection('users').findOne({_id:new ObjectId("6256ce217d586410c03681eb")},(error,user)=>{
            if(error){
                console.log("unable to fetch data");
            }
            else{
                // 1. we have 3 mahir in database it will show the first mahir
                // if it shows null it means it didnt found record
                console.log(user);
            }
        });
        //searching using name and age
        db.collection('users').findOne({name:"mahir" , age:19},(error,user)=>{
            if(error){
                console.log("unable to fetch data");
            }
            else{
                // 1. we have 3 mahir in database it will show the first mahir
                // if it shows null it means it didnt found record
                console.log(user);
            }
        });
        db.collection('users').find({age:19}).toArray((error,user)=>{
            if(error){
                console.log("unable to fetch data");
            }
            else{
                console.log(user);
            }
        })
    }
})