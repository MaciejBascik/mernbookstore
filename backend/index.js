const express = require('express')
const app = express()
const {port, mongoDBURL} = require("./config.js")
const mongoose = require('mongoose')
const crud = require('./routes/CRUD.js')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/books',crud)


app.get("/",(req,res) => {
    res.send("Hello World!")
})

// Connect to MongoDB database using Mongoose

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })})
.catch((error) => {
    console.log(error);
})