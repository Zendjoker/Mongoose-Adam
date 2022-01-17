
const express = require("express");
const connectDB=require("./config/connectDB");

const app=express();
require("dotenv").config();
connectDB();
app.use(express.json()); 

app.use("/api/person",require("./routes/person"));

const PORT=process.env.PORT;

app.listen(PORT,(err)=>err?console.log(err):console.log(`Your server running in port : ${PORT}`));