import { db }  from "../db.js"


export const  getEmpleados = async (req,res) => {

    const { page = 1, limit = 10 } = req.query
    const offset = (page - 1 ) * limit;
    const [ rows ] = await db.query("SELECT * FROM empleados LIMIT ? OFFSET ?", [Number (limit), ]) ;
    res.json(rows)
}


export const  addEmpleado = async (req,res) => {

    const { nombre, cargo } = req.body
    await db.query("INSERT INTO empleados ( nombre, cargo)  VALUES( ?, ? )", [nombre, cargo] )
    res.json({message: "Empleado agregado"})
}


