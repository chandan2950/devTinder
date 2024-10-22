const express = require("express");

const connectDB = require("./config/database");

const User = require('./models/user')

const app = express();

app.post("/signup", async (req,res)=>{
    const userObj= {
        firstName: "chandan",
        lastName: "pal",
        emailId: "chandan@123",
        password: "chandan"
    }

    const user =new User(userObj)  //creating new instance of the user
    try{
        await user.save();
        res.send("user added successfully");
    } catch (err){
        res.status(500).send("error while saving user");
    }
   
})

connectDB()
  .then(() => {
    console.log("Database connected successfully!!!");
    //server listening to incoming requests
    app.listen(3000, () => {
      console.log("server is listening on port 3000....");
    });
  })
  .catch(() => {
    console.log("Database connection error!!!");
  });
