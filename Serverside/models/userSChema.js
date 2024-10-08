const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        trim: true
    },
    userEmail: {
        type: String,
        require: true,
        unique: true,
        
    },
    userNumber: {
        type: String,
        require: true,
        
        minlength: 10
    },
    userMsg: {
        type: String,
        require: true,
        // minlength: 20,
    },
   
})


const USER = new mongoose.model("User", userSchema)
module.exports = USER;
