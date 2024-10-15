const express = require('express');

const app = express();

//request handler

app.use("/",(req,res) =>{
    res.send("Hi from chandan");
});

app.use("/hi",(req,res) =>{
    res.send("love you Rashhhhhhhh");
});

app.use("/hey",(req,res) =>{
    res.send("hellow there");
});

//server listening to incoming requests
app.listen(3000 ,() =>{
    console.log("server is listening on port 3000....")
});

