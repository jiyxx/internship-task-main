const express = require("express");
const router = express.Router();

function logger(req , res , next){
    console.log(`${req.method} ${req.url}`);
    next();
}
module.exports = logger;
