// const { createServer } = require('node:http');
// const fs = require("fs")

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Abhishek Negi</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// need to add   "type": "module", in package.json as a part of Ecamascript
// import {a} from "./mymodule.js"
// console.log(a)

// import obj from "./mymodule.js"
// console.log(obj)

const a = require("./mymodule2.js")
console.log(a)