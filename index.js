import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import solicitudRoutes from "./routes/solicitud.js";
import empleadosRoutes from "./routes/empleados.js";
import authRoutes from "./routes/auth.js";




dotenv.config();


const app = express();
app.use(express.json())


app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));    

app.use("/api/auth", authRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/solicitudes", solicitudRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`servicio se esta ejecutando en el puerto 3000`)
});

