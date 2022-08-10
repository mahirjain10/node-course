const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');

geocode('Mumbai',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        forecast(data.long,data.lat,(error,forecastData)=>{
            if(error){
                console.log(error);
            }
            else{
               console.log(forecastData)
            }
        })
    }
})