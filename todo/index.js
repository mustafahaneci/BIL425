const express = require("express")
const mongoose = require("mongoose")
const exhbs = require("express-handlebars")
const todo = require("./todos")

const app = express()
const PORT = 3000


const hbs = exhbs.create({
    defaultLayout: "main",
    extname: "hbs"
})

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use(todo)





const conn = "mongodb+srv://mustafa123:mustafa123@tododata.lvvzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function start(){
    try{
        await mongoose.connect(conn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log("server has been started"))
    }
    catch (error){
        console.log(error)
    }
}

start()
