const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config(); 

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    imgUrl: { type: String},
    name: { type: String},
    profession: { type: String},
    title: { type: String},
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Admin panel</h1>");
});

//Get All users
app.get("/users", (req, res) => {
  Users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//get users by id
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);

      }else{
        res.status(404).json({message:"NOT FOUND"})
      }
    }else{
        res.status(500).json({message:err})
    }
  });
});

//Delete user
app.delete("/users/:id",(req,res)=>{
    const{id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Delede data")
        }else{
            res.status(404).json({message:err})
        }
    })
})

//Add User
app.post("/users",(req,res)=>{
    const user=new Users({
        imgUrl:req.body.imgUrl,
        name:req.body.name,
        profession:req.body.profession,
        title:req.body.title
    })
    user.save()
    res.send({mesage:"User Created"})
})



const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose.set("strictQuery", true);
mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB connect");
    app.listen(PORT, () => {
      console.log("Server start");
    });
  }
});
