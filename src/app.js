const express = require("express");

const connectDB = require("./config/database");

const User = require('./models/user')

const app = express();

app.use(express.json()); // express middleware which takes json object and convert to js object
                        // then pass js object to req then attaches to .body

app.post("/signup", async (req,res)=>{
    

    const user =new User(req.body)  //creating new instance of the User
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
