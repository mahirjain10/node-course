const bcrypt=require('bcrypt');

const hashing=async(password)=>{
    const hashPassword= await bcrypt.hash(password,8);// hashing the plain text
    const isMatch=await bcrypt.compare("mahirjain30",hashPassword);// seeing if the password match 
    console.log(hashPassword);
    console.log(isMatch)// console logging true or false
    
}
hashing("mahirjain30");