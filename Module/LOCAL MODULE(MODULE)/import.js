////we have only one export function

// const value=require('./export');
// console.log(value(9,9));

// const value=require('./export');
// console.log(value.add(9,9));
// console.log(value.sub(9,9));


////Destructing

// const {add,sub}=require('./export');
// console.log(add(9,9));
// console.log(sub(9,9));

/////Alias name

// const {addition,subtraction}=require('./export');
// console.log(addition(9,9));
// console.log(subtraction(9,9));


////recomended method 
// const value=require('./export');
// console.log(value.add(9,9));
// console.log(value.sub(9,9));

////recomended method with destructring
const {add,sub,mul,div}=require('./export');
console.log(add(9,9));
console.log(sub(9,9));
console.log(mul(10,10));
console.log(div(12,2));