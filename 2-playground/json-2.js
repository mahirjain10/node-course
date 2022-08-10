const fs=require('fs');
const book={
    title:"ego is your biggest enemy",
    author:"Lord mahir"
}
const bookJson=JSON.stringify(book);// converting obj into string 
fs.writeFileSync('json.json',bookJson);// writing string obj to file
const value=fs.readFileSync('json.json');// reading file 
const valueToString=value.toString();// converting buffer into strings
const obj=JSON.parse(valueToString)// converting strings to obj
console.log(obj.title);// printing title