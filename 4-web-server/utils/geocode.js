const request = require("request");
const geocode = (location, callback) => {
  const url= `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoibWFoaXJqYWluIiwiYSI6ImNsMW45YXd3aDBhNTQza285ODYzd215MXMifQ.WQxi3LaziXKvMAzTtGTFEA`;
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to server",undefined);
    } else if (res.body.features.length===0) {
      callback("unable to find location",undefined);
    } else {
      const long = res.body.features[0].center[1];
      const lat = res.body.features[0].center[0];
      const location=res.body.features[0].place_name
      const obj = {
        long,
        lat,
        location
      };
      callback(undefined,obj);
    }
  });
};
module.exports=geocode;