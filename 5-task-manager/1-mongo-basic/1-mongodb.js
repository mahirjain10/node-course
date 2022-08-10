const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

const connectionUrl='mongodb://127.0.0.1:27017';
const databaseName='task-manager';

MongoClient.connect(connectionUrl,{useNewUrlParser:'true'},(err,client)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected successfully");
        const db=client.db(databaseName);
        // insert one command
        // db.collection('users').insertOne({
        //     name:'mahir',
        //     age:19
        // },(error,result)=>{// to show error or result
        //     if(error){
        //         console.log('error');
        //     }
        //     else{
        //         console.log(result.ops);
        //     }
        // });
        
        // insert many command
        db.collection('users').insertMany([
            {
                name:"neel",
                age:21
            },
            {
                name:"sahil",
                age:'22'
            },
            {
                name:"vaibhav",
                age:23
            }
        ],(error,result)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(result.ops);
            }
        })
    }
})