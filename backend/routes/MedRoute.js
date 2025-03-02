 import express from 'express'
 import { addMed,listMed ,removeMed} from '../controllers/MedController.js'

 import multer from "multer"


 const MedRouter = express.Router();

 // image storage Engine

 const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
 })

 const upload = multer({storage:storage})

MedRouter.post("/add",upload.single("image"),addMed)
MedRouter.get("/list",listMed)
MedRouter.post("/remove",removeMed);





 export default MedRouter;