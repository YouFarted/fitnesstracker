"use strict"

require('dotenv').config();
let mongoose = require("mongoose");

const mongoDbUri = process.env.MONGODB_URI || "mongodb://localhost/workout";

console.log("connecting to mongo using uri: ", mongoDbUri);

mongoose.connect(mongoDbUri, {
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

async function asyncmain() {

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
}
