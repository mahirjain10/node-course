import fetch from 'node-fetch'
// fetch('http://puzzle.mead.io/puzzle').then((res)=>{
//     res.json().then((data)=>{
//         console.log(data);
//     })
// })
fetch('http://localhost:3000/weather?address=!').then((res)=>{
    res.json().then((data)=>{
        console.log(data);
    })
})