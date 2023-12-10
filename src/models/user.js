import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"email is required!!"]
    },
    password:{
        type:Number,
        required:true
    }
})

export const User= mongoose.models.users ||mongoose.model("users",userSchema)