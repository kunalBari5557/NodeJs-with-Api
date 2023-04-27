const dbConnect = require("./06mongoDbConnect");

const deleteData=async()=>{
    let data = await dbConnect()
    //when we delete multiple record there we can be use deleteMany
    let result = await data.deleteOne({name:'max 9 pro'})
}

deleteData()