const express = require('express')
const connectDB = require('./config/connectDB')
const User = require('./models/User')
require ('dotenv').config({path:"./config/.env"})

const app = express()

connectDB()

const PORT = process.env.PORT || 5000

app.use (express.json())


app.post ('/add', async(req, res) => {
    const {fullName, email, phone} = req.body
    try {
        const newUser = new User({
            fullName,
            email,
            phone
        })
        await newUser.save()
        res.send("User added")
    } catch (error) {
        console.log(error)
    }
})


app.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})


app.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send("Deleted")
    } catch (error) {
        console.log(error)
    }
})


app.put("/edit/:id", async (req, res) => {
    try {
        const editUser = await User.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.send(editUser)
    } catch (error) {
        console.log(error)
    }
})

app.listen (PORT, (err) => err ? console.log(err) : console.log(`Server is running on port ${PORT}`))

