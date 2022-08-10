const jwt =require('jsonwebtoken');

const fun=async()=>{
    const token=jwt.sign({_id:'lord'},'lordmahirjain');
    console.log(token); 
    const data=jwt.verify(token,'lordmahirjain')
    console.log(data);
}
fun();