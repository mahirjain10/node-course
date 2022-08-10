const express=require('express');
const geocode=require('../utils/geocode');
const forecast=require('../utils/forecast');
const app=express();

app.get('/weather',(req,res)=>{
    if(req.query.address===''){
        res.send("Please fill address");
    }
    else{
        geocode(req.query.address,(err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                forecast(data.long,data.lat,(err,forecastData)=>{
                    if(err){
                        res.send(err);
                    }
                    else{
                        res.send({
                            "forecast":forecastData,
                            location:data.location,
                            address:req.query.address
                        })
                    }
                })
            }
        })
    }
})
app.get('/',(req,res)=>{
    res.send("welcome to home page");
})
app.listen(3000,()=>{
    console.log("server fired off bro");
})