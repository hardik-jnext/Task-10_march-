const express = require("express")
const app = express()
const fs = require("fs")

app.get('/api',(req,res)=>{
    let reader = fs.createReadStream("./fake.txt")
    reader.on("data",(Data)=>{
        res.write(Data.toString())
        })
    reader.on("close",(Data)=>{
        res.end()
    })    
})
app.listen(3000,()=>{
    console.log("Server listening at port no : 3000")
})