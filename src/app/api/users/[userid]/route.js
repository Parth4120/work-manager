import { User } from "@/models/user";
import { NextResponse } from "next/server";


export const GET = async (request,{params}) =>{
    const {userid}=params;
    const userOne=await User.findById(userid)
    return NextResponse.json(userOne)
}

// delete user
export async function DELETE(request,{params}) {
    const {userid}=params;         //params.userid is name of folder name
    try {
        await User.deleteOne({
            _id:userid
        })
        return NextResponse.json({
            message:"user has been deleted",
            success:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"failed todeleted",
            success:false
        })
    }
}


// update data
export async function PUT (request,{params}){
    const {userid}=params;
    const {name,password}=await request.json();
    try {
        const user=await User.findById(userid);
        user.name=name;
        user.password=password;
       const updatedUser= await user.save();
       return NextResponse.json(updatedUser)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"can`t updte data",
            success:false
        })
    }
}