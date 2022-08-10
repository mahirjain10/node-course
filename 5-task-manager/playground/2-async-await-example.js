require("../2-mongoose/1-basic");
// const { findByIdAndDelete } = require("../2-mongoose/3-user");
const db=require('../2-mongoose/3-user');

const deleteTaskAndCount=async(id)=>{
    await db.findByIdAndDelete(id);
    const count= await db.countDocuments({completed:false});
    return count;
}

deleteTaskAndCount('62597d8549794ab8fd8aada0').then((count)=>{
    console.log(count);
}).catch((err)=>{
    console.log(err);
})