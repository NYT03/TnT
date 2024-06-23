// const mongoose=require('mongoose');
import { mongoose } from 'mongoose';
mongoose.connect('mongodb://localhost:27017/NYT')
.then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log("Failed");
    console.log(err);
})

const User=new mongoose.Schema({
  
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('User',User)
export default collection;