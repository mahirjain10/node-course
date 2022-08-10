const request=require('request');
// const url='http://api.weatherstack.com/current?access_key=a04bc9a46ac47f9939b3702015828d57&query=New York'
const geocode=require('../weather-app/utils/geocode');
const forecast=require('../weather-app/utils/forecast');
// request takes two argument 
// 1. object which have url 
// 2. callback fun with err and response as parameter

// 1st method 
// request({url:url},(err,res)=>{
//     // converting json into obj by using JSON.parse()
//     const data=JSON.parse(res.body);
//     console.log(data.current);
// })

// 2nd method
// used json :true it will automatically parse the json for us. no requirement of parsing data manually
// request({url:url,json:true},(err,res)=>{
//     console.log(res.body.current);
// })

// importing geocode from utils
geocode('India',(err,data)=>{
    console.log('data : ',data);
    console.log('error : ',err)
})
// importing forecast from utils
forecast(72.877655,19.075983,(err,data)=>{
    console.log('data : ',data);
    console.log('error : ',err)
})