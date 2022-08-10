const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(a+b)
        })
    })
}
add(1,1).then((sum)=>{
    console.log(sum);
    return add(sum,2)
}).then((sum)=>{
    console.log(sum);
    return add(sum,2);
}).catch((err)=>{
    console.log(err);
}) 