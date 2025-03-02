import mongoose from "mongoose";

export const connectDB= async ()=>{
    // put your mongo db link
    await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.8aiksrc.mongodb.net/medEasyDB?retryWrites=true&w=majority').then(()=>console.log("DB Connected"))
}