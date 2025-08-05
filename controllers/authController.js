import { db } from "../db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dontenv from "dotenv"

dontenv.config();


export const register = async(req , res ) => {
const {username, password, rol } = req.body;



    try {
    const hashed  = await bcrypt.hash( password, 10);
    await db.query ('INSERT INTO usuarios ( username, password, rol)  VALUES(?,?,?)',[username, hashed, rol])
    res.json({message: 'Usuario registrado'}
    );

    
    } catch (error) {
        console.error("Error en register:", error.message);
        res.status(500).json({message: 'Error al registrar usuario'});
    }

     

} 



export const login = async (req, res) => {
    const {username, password} = req.body;
       console.log("Datos recibidos:", username, password);

     try {
            const  [rows] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);
              console.log("Resultado SQL:", rows);
        
        if (!rows.length) {
        return res.status(401).json({messages: 'Usuario no encontrado'});
        }

        const user = rows [0]; 
        console.log("Usuario encontrado:", user);
        const insMatch = await bcrypt.compare(password, user.password);

        if (!insMatch) {
            return res.status(401).json({message: 'Credenciales invalidas'});
        
        }    console.log("Contraseña coincide:", insMatch);
            

            const token = jwt.sign(
            {id: rows[0].id, rol: rows[0].rol},
            process.env.JWT_SECRET,
            {expiresIn: '1h'});
            res.json ({token});

    } catch (error) {
        console.error("Error en login:", error.message);
        res.status(500).json({message: 'Error al iniciar sesión'});
    }


} 






