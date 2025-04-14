const http=require("http");
const server=http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url=="/"){
        res.end("Hello From server ");
    }
    else if(req.url=="/about"){
        res.end("ABout SIDE")
    }
    else if(req.url=="/contact"){
        res.write("Hello HI")
      res.end();
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 pages Dosnot Exist</h1>")
    }
})
server.listen(8000,()=>{
    console.log("Server start");
})