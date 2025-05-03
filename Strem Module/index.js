const fs=require("fs");
const readdata=fs.createReadStream('./NodejsStream.txt','utf-8');
console.log(readdata);
readdata.on('data',data=>{
    console.log(data)
})
readdata.on('error',err=>{
    console.log(err);
})
readdata.on('end',__=>{
    console.log("data end");
})
readdata.on('close',__=>{
    console.log("Close ");
})
readdata.on('data',data=>{
    console.log(data);
})