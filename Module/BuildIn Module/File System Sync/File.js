const file=require("fs");
file.writeFileSync("./test.txt","Hey There")
file.writeFileSync("./test.txt","Hey There are you")//it is ovrride it

// file.writeFile("./test.txt","Hey Their Async",(err)=>{})

const resault=file.readFileSync('./concat.txt',"utf-8");
console.log(resault)

//Append file
file.appendFileSync("./test.txt",` hello brother\n`);
file.appendFileSync("./test.txt","I am Debabrata\n");
file.appendFileSync("./test.txt","I am Debabrata");
//file.cpSync("./test.txt","./copy.txt");

//How to delete the file syncly by using unlinkSync
//file.unlinkSync("./copy.txt");
//console.log(file.statSync("./test.txt"));

//file.mkdirSync('my_docs/a');
