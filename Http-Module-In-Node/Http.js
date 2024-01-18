// Http Module In Node.js

const http = require("http");

// console.log(http);

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("<h1>Home Page </h1>")
        res.write("<p>HOME</p>")

    }else if(req.url === "/about"){
        res.write("<h1>About Page </h1>")

    }else if(req.url === "/contact"){
        res.write("<h1>Contact Page </h1>")
    }else{
        res.write("<h1>Error 404!!</h1>")
    }
    res.end();

});

const port  = 2000;

server.listen(port,()=>{
    console.log(`The Http Server is run http://localhost:${port}`);
})

