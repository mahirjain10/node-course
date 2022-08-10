const geocode=(arg,callback)=>{
    setTimeout(()=>{
        const obj={
            long:0,
            lat:0
        }
        callback(obj)
    },2000)
}
const data=geocode('India',(obj)=>{
    console.log(obj);
});