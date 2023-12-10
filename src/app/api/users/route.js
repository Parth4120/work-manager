import { connectDB } from "@/halper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server"

connectDB();
export async function GET(request) {
    let users=[];
    try {
        users=await User.find();
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"failed to fetch user",
            success:false
        })
    }
    return NextResponse.json(users);
}

// create user
export async function POST(request) {
    // fetch data from request
    const {name,email,password}=await request.json();

    // create user object with user model

    const user = new User({
        name,email,password
    })

   try{

    // save the object to DB
    const createdUser= await user.save();

    const respone=NextResponse.json(user,{status:201});
    return respone;
   }
   catch(error){
   console.log("error is",error)
    return NextResponse.json({
        message:"failed to create user",
        staus:500
    })
   }
}
