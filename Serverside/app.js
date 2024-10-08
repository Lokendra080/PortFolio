require('dotenv').config();
require("./dataBase/connet")
const express= require('express')
const app= express()

const router= require("./dataBase/Routes/apiRoutes")
const cors = require('cors')
const User =require("./models/userSChema")

const connectDB = require("./dataBase/connet")
connectDB()

app.use(express.json())
app.use(cors())
app.use(router)
const port =process.env.PORT || 8005

  
app.get('/userData',async (req,res)=>{
    
     User.find()
     .then((user)=>{res.json(user)})
     .catch((error)=>{res.json(error)})
    // let user = new User(req.body)

    // let result= await user.save()
    // console.log( res.send(result))

})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})