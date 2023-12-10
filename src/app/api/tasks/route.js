import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get all the task
export async function GET(request) {

    try {
        const tasks=await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error)
        return NextResponse({
            message:"can`t get the task"
        })
    }
}

// create all the tasks
export async function POST(request) {
    const {title,content,userid}=await request.json();
    try {
        const task=new Task({
            title,content,userid 
        })

      const createdTask= await task.save();
      return NextResponse.json(createdTask,{
        message:"task has been created",
        status:201,
      })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"can`t created task",
        })
    }
}