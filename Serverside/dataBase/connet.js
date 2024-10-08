const mongoose = require("mongoose")
const DB=process.env.DATABASE


const connectDB = async()=>{
    const connetc = await mongoose.connect(DB)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Database connection error:', error.message));
}

module.exports=connectDB