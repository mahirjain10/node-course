const request = require("request");
const forecast=(longitude,latitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=a04bc9a46ac47f9939b3702015828d57&query=${longitude},${latitude}`
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback("unable to server",undefined);
        }else if(res.body.error){
            callback("unable to find location f",undefined);
        }
        else{
            callback(undefined,`It is currently ${res.body.current.temperature} degree out. There is a ${res.body.current.feelslike}% chance of rain`)
        }
    })
}
module.exports=forecast