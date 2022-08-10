require("../2-mongoose/1-basic");
const User=require('../2-mongoose/3-user');

User.findByIdAndUpdate('625c16a3230ab8145c552b4a',{name:"suhana"}).then((user)=>{
    console.log(user);
    
})