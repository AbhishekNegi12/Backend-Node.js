fs.writeFile("abhi2.txt","Abhishek is a Programmer",()=>{
    console.log("done");
    fs.readFile("abhi2.txt",(error,data)=>{
        console.log(error,data.toString());
        //again
        fs.writeFile("abhi2.txt","Abhishek is a Programmer",()=>{
            console.log("done");
            fs.readFile("abhi2.txt",(error,data)=>{
                console.log(error,data.toString());
                //again
                fs.writeFile("abhi2.txt","Abhishek is a Programmer",()=>{
                    console.log("done");
                    fs.readFile("abhi2.txt",(error,data)=>{
                        console.log(error,data.toString());
                        //again
                    })
                })
                fs.writeFile("abhi2.txt","Abhishek is a Programmer",()=>{
                    console.log("done");
                    fs.readFile("abhi2.txt",(error,data)=>{
                        console.log(error,data.toString());
                        //again
                        fs.writeFile("abhi2.txt","Abhishek is a Programmer",()=>{
                            console.log("done");
                            fs.readFile("abhi2.txt",(error,data)=>{
                                console.log(error,data.toString());
                                //again
                            })
                        })
                    })
                })
            })
        })
    })
})