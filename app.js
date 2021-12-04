require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000



const service=require("./service")
const mongoose = require("mongoose")

mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Moongo db connect"))
    
app.get('/', (req, res) => res.send('Welcome to Online Service Management System'))

app.use("/service",service);

app.listen(port, () => console.log(`Service Management System  listening on port ${port}!`))