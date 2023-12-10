import mongoose from "mongoose";
import { user } from "../models/user"
export const connectDB = async() =>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager",
        });
        console.log("db connected")
        // console.log("connection is",connection)

        // testing creatin new user
    //    const detail= new user({
    //         name:"parth",
    //         email:"abc@gmail.com",
    //         password:4120
    //     })
    //     await detail.save();
    //     console.log("user is created")
    }
    catch(error){
        console.log("db is not connected")
        console.log(error)
    }
}