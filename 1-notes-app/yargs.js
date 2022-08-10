const yargs=require('yargs');

yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,// you chose to input title compulsory
            type:"string"//title type should be string
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        // console.log("adding a notes",argv);
        console.log("Title : ",argv.title);
        console.log("Body : ",argv.body);
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler:function(){
        console.log("removing a notes");
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log("reading a notes");
    }
})
yargs.command({
    command:'list',
    describe:'list a note',
    handler:function(){
        console.log("listing a notes");
    }
})
// console.log(yargs.argv);
yargs.parse();