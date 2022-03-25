const fs = require("fs");
const path = require("path");

fs. readFile(path.resolve(__dirname, "text.txt"), (err, data) => {
    if(err) {
        throw err
    }
    console.log(data)
})


/*const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"), "utf-8")

stream.on("open", () => console.log("start"))

stream.on("data", (chunk) => {
    console.log(chunk);
})

stream.on("end", () => console.log("end"))*/

const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"), "utf-8")
const writeStream = fs.createWriteStream(path.resolve(__dirname, "textdata2.txt"))

readStream.pipe(writeStream);

/*for(let i= 0; i<10; i++){
    writeStream.write(i + "\n");
}*/

/*writeStream.end();
writeStream.close();
writeStream.destroy();*/