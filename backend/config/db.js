import mongoose from "mongoose";


const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://extrastack:7789s456a@cluster0.hslrmjs.mongodb.net/LockIt').then(()=>console.log("DB Connected"));
   
}
export default connectDB;