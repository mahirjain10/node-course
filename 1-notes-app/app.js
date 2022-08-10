// const fs =require('fs');
// fs.writeFileSync('notes.txt','Hello I am your notes file');// writeFileSync will create new file if there isnt one 
// fs.appendFileSync('notes.txt',' I got appended');

// --------------------------------------------------------------

// challenge

const getNotes=require('./notes');
const notes=getNotes();
console.log(notes);