const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
const ErrorMiddleware= require("./middleware/error")

app.use(cors({
  origin:"*",
  credentials:true
}))

const {userRoute} = require('./controllers/userRoute');



app.get("/test", async (req, res) => {
  res.send("hello.....");
});


app.use("/user",userRoute)




app.use(ErrorMiddleware)

module.exports = { app };