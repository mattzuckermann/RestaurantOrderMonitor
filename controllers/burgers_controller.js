const express = require("express");
const burger = require("../models/burger");
const path = require("path");

module.exports = function (app) {
    // API ROUTES
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(true);
    });
    
    // HTML ROUTES
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function (req, res) {
        res.redirect('/');
    });
};


module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function (req, res) {
        res.redirect('/');
    });
};