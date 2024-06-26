const express = require("express")
const app = express();
// const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("../config/db");
const userRouter = require("../routes/userRouter");
const sellerRouter = require("../routes/sellerRouter");
const adminRouter = require("../routes/adminRouter");
const carRouter = require("../routes/carRouter");

const port = 3000;
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/seller",sellerRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/car",carRouter);





app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})