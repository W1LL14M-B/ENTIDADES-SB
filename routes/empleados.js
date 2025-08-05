import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { getEmpleados, addEmpleado } from "../controllers/empleadosController.js"




const router = express.Router() 

router.get('/', verifyToken, getEmpleados)
router.post('/', verifyToken, addEmpleado)



export default router