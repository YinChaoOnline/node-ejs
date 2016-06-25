var express = require("express");
var app = express();
var ejs = require("ejs");
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

//routes
app.get("/", function (req, res) {

    //send view using res.render,will look up in views folder
    res.render("pages/index");
});
app.get("/about", function (req, res) {
    res.render("pages/about");
});

app.listen(port);
console.log("server listening on:http://localhost:" + port);
