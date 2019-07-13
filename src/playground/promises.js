const promise = new Promise((resolve, reject) => 
{
    setTimeout(() => 
    {
        // resolve("This is my resolved data");
        // resolve("this is my other resolve data");
        reject("something went wrong");
    }, 3000);
    
});

console.log("before");

promise.then((data) => 
{
    console.log(data);
}).then(() => 
{
    console.log("dos this run");
}).catch((error) => 
{
    console.log("error:", error);
});

console.log("after");