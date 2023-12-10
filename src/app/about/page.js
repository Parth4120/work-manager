

async function takeTime(){
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
        // throw new Error("this is menual error");
    })
}

export default async function about(){
    await takeTime();
    
    return(
        <div>
            <h1>this is about page</h1>
        </div>
    )
}