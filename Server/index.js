const http=require("http");
const fs=require("fs");
const myServer=http.createServer((req,res)=>{
   const log="$HACKED$\n,${req.url}";
    fs.appendFile('log.txt',log,(err,data)=>{
        console.log("New REquest Recive")
        res.end("Hello");
    })
});

myServer.listen(8000,()=>{
    console.log("Server Started");
})