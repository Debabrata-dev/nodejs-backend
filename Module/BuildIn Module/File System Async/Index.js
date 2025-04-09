const file=require("fs");
//file create
file.writeFile('./read.txt',"today is badday: ",(err)=>{
    console.log(err)
});
//file append
file.appendFile("./read.txt","we have to work hard",(err)=>{
    console.log(err)
})
//reading the file data
file.readFile("./read.txt",'utf-8',(err,data)=>{
console.log(data)
})