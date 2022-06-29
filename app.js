// external imports 
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

// internal imports 
const {notFoundHandler, defaultError} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const registerRouter = require("./router/registerRouter");
const forgetPassRouter = require("./router/forgetPassRouter");
const recoverPassRouter = require("./router/recoverPassRouter");

// configuration 
const app = express();
dotenv.config();

// database connection
mongoose
    .connect(process.env.MONGOOSE_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("Database Connection Successfull"))
    .catch(err => console.log(err));

// request parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine setup
app.set("view engine", "ejs");

// static folder setup 
app.use(express.static(path.join(__dirname, "public")));

// routing setup 
app.use("/", loginRouter);
app.use("/register", registerRouter);
app.use("/forget-pass", forgetPassRouter);
app.use("/recover-pass", recoverPassRouter);

// 404 error handler 
app.use(notFoundHandler);

//defaul error handler
app.use(defaultError);

// port listening 
app.listen(process.env.PORT, ()=> {
    console.log(`App listening on port ${process.env.PORT}`);
});