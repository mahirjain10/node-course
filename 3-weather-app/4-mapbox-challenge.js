const request=require('request');
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1IjoibWFoaXJqYWluIiwiYSI6ImNsMW45YXd3aDBhNTQza285ODYzd215MXMifQ.WQxi3LaziXKvMAzTtGTFEA'
request({url:url,json:true},(err,res)=>{
    console.log(`longitude : ${res.body.features[0].center[0]} , latitude : ${res.body.features[0].center[1]}`);
})