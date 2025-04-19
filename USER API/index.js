const http=require("http");
const fs=require("fs");

const Server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello From server")
    }
    else if(req.url=="/about"){
        res.end("Hello Hi")
    }
    else if(req.url=="/contact"){
        res.end("Hello from Contact")
    }
    else if(req.url=="/userapi"){
    fs.readFile(`${__dirname}/USER API/userapi.json`,"utf-8",(err,data)=>{
        console.log(data)
     
    res.end("Data")
    });
   
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error pages.</h1>")
    }
})
Server.listen('8000',()=>{
    console.log("Server start")
})

 