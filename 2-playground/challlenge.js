const fs=require('fs');
const loadData=fs.readFileSync('challenge.json');
const parse=JSON.parse(loadData.toString());
console.log(parse);
const info={
    name:'mahir',
    planet:'Earth',
    age:'19'
}
const strngfy=JSON.stringify(info)
fs.writeFileSync('challenge.json',strngfy);
