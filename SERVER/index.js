const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("Server Created");
})
server.listen(4000,()=>{
    console.log("Start the server");
})