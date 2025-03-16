const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("abhi.txt","Abhishek is Programmer")

fs.writeFile("abhi2.txt","Abhishek is a Programmer",()=>{
    console.log("done");
    fs.readFile("abhi2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("abhi2.txt","G.O.A.T",(e,d)=>{
    console.log(d);
})


console.log("ending")