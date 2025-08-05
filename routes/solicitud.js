import { verifyToken } from "../middleware/auth.js"
import express from "express"
import { isAdmin } from "../middleware/role.js";
import { getSolicitudes, addSolicitud, deleteSolicitud } from "../controllers/solicitudController.js"

const router = express.Router()

router.get("/", verifyToken, getSolicitudes);
router.post("/", verifyToken, isAdmin,addSolicitud);
router.delete("/:id", verifyToken, isAdmin, deleteSolicitud )


export default router