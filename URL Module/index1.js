const http=require("http");
const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.end("HOME PAGE");
}
else if(req.url=="/about"){
    res.end("ABOUT");
}
else if(req.url=="/contcat"){
    res.end("HELLO Concat me");
}
else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>404 error pages.Page Dosnot exist</h1>")
}
});
server.listen(8000,()=>{
    console.log("SERVER START")
})