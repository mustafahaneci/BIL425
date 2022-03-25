const express = require("express");


const app = express();

/*app.get("/", (req, res) => {

    res.sendFile("./views/index.html", {root:__dirname});
})*/

app.get("/users/", (req, res) => {

    res.status(200).send(`<h1>Users ID: ${req.params.id}</h1>`)
})

app.listen(3000, () => console.log("Server running"))