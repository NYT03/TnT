import express from 'express';
import collections from 'mongodb';
import cors from 'cors';
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',cors(),(req,res)=>{
    res.send("Hello World")
})

app.post('/',async(req,res)=>{
    const [email,password]=req.body
    try{
        const check=await collections.findOne({email:email})
        if(check){
            res.json("Exist");
        }
        else
        {
            res.json("Not Exist");
        }
    }
    catch{
        res.json("Not Exist");
    }
    const data={Email:email,Password:password}
    const result=await collections.insertOne(data)
    res.send(result)
})
app.post('/signup',async(req,res)=>{
    const [email,password]=req.body
    const data={Email:email,Password:password}
    try{
        const check=await collections.findOne({email:email})
        if(check){
            res.json("Already Exist");
        }
        else
        {
            await collections.insertOne([data])
        }
    }
    catch{
        res.json("Not Exist");
    }
    const result=await collections.insertOne(data)
    res.send(result)
})

app.listen(5500,()=>console.log("Server started"))