const dbConnect = require("./06mongoDbConnect");
const express =require('express')
const mongodb = require('mongodb')
const app = express()

app.use(express.json())//for post api

//get api
app.get('/',async(req,resp)=>{
    let data = await dbConnect()
    let result=await data.find().toArray()
    console.log(result);
    resp.send(result)
})

//post api
app.post('/',async(req,resp)=>{
    let data = await dbConnect()
    let result=await data.insertOne(req.body)
    resp.send(result)
})

//put api
app.put('/:name',async(req,resp)=>{
    let data = await dbConnect()
    let result=await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    resp.send({result:"updated"})
})

//app delete
app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id);
    let data = await dbConnect()
    const result =await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(5000)