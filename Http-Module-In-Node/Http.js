// Http Module In Node.js

const http = require("http");

// console.log(http);

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("<h1>We are Success Fully create Server </h1>")

    }
    res.end();

});

const port  = 2000;

server.listen(port,()=>{
    console.log(`The Http Server is run http://localhost:${port}`);
})

