// how call back works 
// const doCallback=(callback)=>{
//     setTimeout(()=>{
//         // callback(undefined,[33,223,22]);
//         callback('failed',undefined);
//     })
// }
// doCallback((error,result)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(result);
//     }
// })

// how promises work

const doPromise=new Promise((reject,resolve)=>{
    setTimeout(()=>{
    // resolve("success");  
    reject("failed");      
    },2000);
});
doPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})