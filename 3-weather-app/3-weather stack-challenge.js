const request=require('request');
const url='http://api.weatherstack.com/current?access_key=a04bc9a46ac47f9939b3702015828d57&query=New York'
request({url:url,json:true},(err,res)=>{
    console.log(`It is currently ${res.body.current.temperature} degree out. There is a ${res.body.current.feelslike}% chance of rain`);
})