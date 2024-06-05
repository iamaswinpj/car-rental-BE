const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser");
const connectDB = require("../config/db")
const userRouter = require("../routes/userRouter")

const port = 3000
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",userRouter);







app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})