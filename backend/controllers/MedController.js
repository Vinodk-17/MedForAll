import MedModel from "../models/MedModel.js";
import fs from 'fs'

// add Med

const addMed = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const Med = new MedModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await Med.save();
        res.json({ success: true, message: "Medicine Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

//All Med list

const listMed = async (req, res) => {
    try {
        const Meds = await MedModel.find({})
        res.json({ success: true, data: Meds })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// remove Med item

const removeMed = async (req,res)=> {
try {
    const Med = await MedModel.findById(req.body.id);
    fs.unlink(`uploads/${Med.image}`,()=>{})

    await MedModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Medicine Removed"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
    
}
}

export { addMed, listMed,removeMed }