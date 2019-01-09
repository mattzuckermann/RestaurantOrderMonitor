const express = require("express");
const burger = require("../models/burger");
const path = require("path");
const exphbs = require("express-handlebars")

module.exports = function (app) {
    // HTML ROUTES
    app.get(["/index", "/"], function (req, res) {
        res.render("index", {});
    });

    app.get("*", function (req, res) {
        res.redirect('/index');
    });
};