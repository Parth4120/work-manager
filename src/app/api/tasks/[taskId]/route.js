import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// api/tasks/task_id
export async function GET(request,{params}){
    const {taskId}=params;
    try {
        const oneTask= await Task.findById(taskId);
        return NextResponse.json(oneTask)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message:"error in getting task"
        })
    }
    
}

export async function POST(request){
    
}

export async function PUT(request,{params}){
    const {taskId}=params;
    const {title,content}=await request.json();
    try {
        const task=await Task.findById(taskId);
        task.title=title;
        task.content=content;
        const updatedTask=await task.save();
        return NextResponse.json(updatedTask)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"can`t updated task"
        })
    }
}


export async function DELETE(request,{params}){
    const {taskId}=params;
    try {
        await Task.findByIdAndDelete(taskId)
        return NextResponse.json({
            message:"task has been deleted"
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message:"error in deletion the task"
        })
    }
    
}