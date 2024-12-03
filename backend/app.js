const express = require("express");
const productRoute = require('./route/product.route.js');
const { connect } = require("./model/connection.js");
const path = require("path");
const app = express();
connect();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/product', productRoute);
app.use('/pictures', express.static(path.join(__dirname, "pictures")));
module.exports = app;