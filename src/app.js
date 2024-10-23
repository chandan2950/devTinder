const express = require("express");

const connectDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.use(express.json()); // express middleware which takes json object and convert to js object
// then pass js object to req then attaches to .body

//get user by emailid
app.get("/user", async (req, res) => {
  const Useremail = req.body.emailId;
  try {
    const users = await User.find({ emailId: Useremail });
    if(users.length === 0){
      res.send("oops!! user not found")
    }else{
      res.send(users);
    }
   
  } catch (err) {
    res.send("error!!!!");
  }
});

//post api to signup user
app.post("/signup", async (req, res) => {
  const user = new User(req.body); //creating new instance of the User
  try {
    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(500).send("error while saving user");
  }
});

//feed api to get all user
app.get("/feed", async (rq,res)=>{
  try{
    const users= await User.find({});
    res.send(users)
  } catch(err){
    res.status(404).send("user not found")
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
