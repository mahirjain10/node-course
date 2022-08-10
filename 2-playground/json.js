const book={
    title:"ego is your biggest enemy",
    author:"Lord mahir"
}
const bookJson=JSON.stringify(book);//JSON.stringfy converts js object into strings 
console.log(bookJson);
const bookObj=JSON.parse(bookJson);//JSON.parse converts js string into obj
console.log(bookObj.title);