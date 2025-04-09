// let add=(a,b)=>{
//     return a+b;
// }

// let sub=(a,b)=>{
//     return a-b;
// }

// module.exports={add,sub};

////alias name
// let add=(a,b)=>{
//     return a+b;
// }

// let sub=(a,b)=>{
//     return a-b;
// }

// module.exports={addition:add,subtraction:sub};

////recommended process of expoting
exports.add=(a,b)=>{
    return a+b;
}

exports.sub=(a,b)=>{
    return a-b;
}

exports.mul=(a,b)=>{
    return a*b;
}

exports.div=(a,b)=>{
    return a/b;
}