const express = require('express');

const app = express();

//request handler

app.get("/user", (req,res) =>{
    res.send({ firstname:"chandan" , lastname:"pal"});
});

app.post("/user", (req,res) =>{
    res.send("posted succesfully");
});

app.delete("/user", (req,res) =>{
    res.send("Deleted succesfully");
});
// app.use show all data with the matching route
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

