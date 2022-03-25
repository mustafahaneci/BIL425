const fs = require("fs");
const path = require("path");

// fs.mkdirSync(path.resolve(__dirname, "dir"));

/*fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
    if(err){
        console.log(err)
    }

    console.log("file")
})*/

/*fs.writeFile(path.resolve(__dirname, "text.txt"), "Ali Veli 1 2 3", (err) => {
    if(err){
        console.log(err)
    }

    fs.appendFile(path.resolve(__dirname, "text.txt"), "4 5 6", (err) => {
        if(err){
            console.log(err)
        }
    })
})*/


//Promise

/*const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err){
            return reject(err.message)
        }
        resolve()
    } ))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err){
            return reject(err.message)
        }
        resolve()
    } ))
}

writeFileAsync(path.resolve(__dirname, "text.txt"), "data")
    .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "BIL"))
    .catch(err => console.log(err))*/



    /*const writeFileAsync = async (path, data) => {
        return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
            if(err){
                return reject(err.message)
            }
            resolve()
        } ))
    }

    const appendFileAsync = async (path, data) => {
        return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
            if(err){
                return reject(err.message)
            }
            resolve()
        } ))
    }

    writeFileAsync(path.resolve(__dirname, "text.txt"), "")
    .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "BIL 1 2 3 4"))
    .catch(err => console.log(err))
    
    
    const readFileAsync = async (path, data) => {
        return new Promise((resolve, reject) => fs.readFile(path, {encoding: "UTF-8"}, (err) => {
            if(err){
                return reject(err.message)
            }
            resolve(console.log(data))
            
        } ))
    }

    writeFileAsync(path.resolve(__dirname, "text.txt"), "data")
    .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))*/
    

    const fsPromise = require("fs").promises;

    const fileRead  = async () => {
        try {
            await fsPromise.writeFile(path.resolve(__dirname, "text.txt"))
        } catch (error) {
            
        }
    }