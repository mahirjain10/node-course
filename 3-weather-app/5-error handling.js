const request=require('request');
const url='http://api.weatherstack.com/current?access_key=a04bc9a46ac47f9939b3702015828d57&query=New York'
request({url:url,json:true},(err,res)=>{
    if(err){// this error message is when there is no internet
        console.log("Unable to connect to server")
    }
    else if(res.body.err){
        console.log("unable to find location")
    }
    else{
        console.log(res.body.current.temperature);
    }
})