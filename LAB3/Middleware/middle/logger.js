const fs = require("fs");
const path = require("path");
const fsPromise = require("fs/promises");

const logger = async (message, logName) =>{

    const currentDate = new Date().toUTCString();
    const logMessage = `${currentDate}\t${message}`

    try {
        if(!fs.existsSync(path.join(__dirname, "..", "logs"))){
            await fsPromise.mkdir(path.join(__dirname, "..", "logs"));
        }

        await fsPromise.appendFile(path.join(__dirname, "..", "logs", logName), logMessage);

    } catch (error) {

        console.log(error);
    }


}

module.exports = logger;