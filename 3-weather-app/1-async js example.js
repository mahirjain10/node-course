// this example shows how async js works
// set timout will execute after execution of all console.log
console.log("starting");
setTimeout(()=>{
    console.log("2 sec timer");
},2000)
setTimeout(()=>{
    console.log("0 sec timer");
},0)
console.log("stopping")