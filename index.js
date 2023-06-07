const express = require('express');

const {connection}=require("./config/db")

require('dotenv').config();

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to chat app")
})

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})