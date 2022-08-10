// async function always return promise

const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },4000)
    })
}

const doWork=async()=>{
    const sum=await add(1,99);
    const sum2=await add(sum,88);
    return sum2;
}

doWork().then((result)=>{
    console.log("result : ",result);
}).catch((e)=>{
    console.log(e);
})