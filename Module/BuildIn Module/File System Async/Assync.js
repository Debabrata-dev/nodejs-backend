const File=require("fs");
// File.mkdir("BIO",(err)=>{
//     console.log(err)
// })
// File.writeFile("./BIO/bio.txt","Hello How are you",(err)=>{
//     console.log(err);
// })

// File.readFile("./BIO/bio.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

// File.appendFile("./BIO/bio.txt","\n I am good",(err)=>{
//     console.log(err)
// })

// File.rename("./BIO/bio.txt","./BIO/bieo.txt",(err)=>{
//     console.log(err)
// })

// File.unlink("./BIO/bieo.txt",(err)=>{
//     console.log(err)
// })

File.rmdir("./BIO",(err)=>{
    console.log(err);
})