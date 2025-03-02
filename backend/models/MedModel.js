import mongoose from "mongoose";

 const MedSchema = new mongoose.Schema({
     name:{type:String,required:true},
     description:{type:String,required:true},
     price:{type:Number,required:true},
     image:{type:String,required:true},
     category:{type:String,required:true}
 })

 const MedModel=mongoose.models.Med || mongoose.model("Med",MedSchema);

 export default MedModel;