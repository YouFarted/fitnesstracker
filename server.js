"use strict"

let mongoose = require("mongoose");

/*
mongoose.connect(process.env.MONGODB_URI | "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});
*/

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});


let db = require("./models");

const express = require("express");

const apiRoutes = require("./routes/api-routes")
const htmlRoutes = require("./routes/html-routes")



var app = express();

var PORT = process.env.PORT || 8080;

console.log(`PORT is set to ${PORT}`);

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(apiRoutes);
app.use(htmlRoutes);

app.use(express.static("public"));






asyncmain().then(x => {
}).catch(e => {
    console.error("Uncaught exception made it to the top: ", e);
});

function isUsingLocalMysql() {
    return (typeof (orm.connection.config) !== "string");
}

async function asyncmain() {

    try {
        // if it is a string, it is using JAWS_DB which puts us in some
        // fixed database, making USE <database> inappropriate
        // for local mysql connections, however, I connect using the sys
        // database so that I may create/drop the burgers database at will
        // in its entirety

        // public's got everything covered for now.
        // until I configure routes
        /*
        
    app.get("/", async function (req, res) {

        try {
            const burgers = await burger.selectAll();
            
            res.render("index", { burgers: burgers });
        } catch (ex) {
            res.status(500).json(ex);
        }
    })

    */
    } catch (ex) {
        console.error("ex:", ex);
    }

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
}
