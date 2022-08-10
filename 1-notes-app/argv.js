console.log("Hello");

console.log(process.argv)

const command=process.argv[2];

if(command==='add'){
    console.log("adding !");
}
else if(command==='edit'){
    console.log("editing");
}
else{
    console.log('wrong command');
}