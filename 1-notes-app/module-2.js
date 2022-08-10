console.log('hello i am module 2');

console.log('I will get printed when I will get require in other files');

const name ='mahir';

const sum = (a,b)=>{
    return a+b;
}
// module.exports=name; // you have to export the variable when you want to access that variable in other files
module.exports=sum;