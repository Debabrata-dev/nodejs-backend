const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
  const log="Hello How are you\n";
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("Home");
           
            case'/about':
            res.end("I am Debabrta Das");
       
            default:
                res.end("404 Not found");
        }
        res.end("Today data is");
    })
});
server.listen(8000,()=>console.log('Server Started!'));
