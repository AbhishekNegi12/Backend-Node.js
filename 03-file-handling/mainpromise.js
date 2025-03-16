import fs from "fs/promises"

let a = await fs.readFile("abhi.txt")

let b = await fs.writeFile("abhi.txt","\n\n\n\nthis is am amazing promise")
console.log(a.toString(),b);