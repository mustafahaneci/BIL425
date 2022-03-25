const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    
    /*const url = req.url;
    res.end(url);*/

    res.statusCode = 200;
   /* res.setHeader("Content-type", "text-plain");
    res.end("hellooo")*/

    /*res.setHeader("Content-type", "text/html");
    res.end("<h1>hellooo</h1>")*/

    /*res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify([{id:1, name: "BIL425"}]))*/

    res.writeHead(200, {"Cntent-Type": "text/plain"})
    res.end("asdasd");
})

server.listen(PORT,() => {
    console.log("server running ${PORT} ");
})