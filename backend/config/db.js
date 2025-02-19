import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://vishalkandu01:EDZenjdhEMbr9MzQ@cluster0.8aiksrc.mongodb.net/medEasyDB?retryWrites=true&w=majority').then(()=>console.log("DB Connected"))
}