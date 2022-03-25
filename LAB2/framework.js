const http = require("http");

const EventEmitter = require("events");
const emitter = new EventEmitter();

class Router {
    constructor(){
        this.enpoints = {}
    }

    request(method, path, handler){
        if(!this.enpoints[path]){
            this.enpoints[path] = {}
        }

        const endpoint = this.enpoints[path];

        if(endpoint[method]){
            throw new Error("")
        }

        endpoint[method] = handler

        emitter.on('[${path}]:[${method]', (req, res) => {
            handler(req, res);
        })
    }

    get(pat, handler){
        this.request("GET", path, handler);
    }

    post(pat, handler){
        this.request("POST", path, handler);
    }
    
}

const router = new Router();

router.get("/users", (req, res) => {
    res.end("Sedn request /users");
})



const PORT = 3000;
const server = http.createServer((req, res) => {

    //res.end(req.url);

    emitter.emit('[${path}]:[${method]', req, res);
})

server.listen(PORT, () => console.log("running port"));