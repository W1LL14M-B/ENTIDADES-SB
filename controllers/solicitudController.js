import { db } from "../db.js"


export const getSolicitudes = async(req,res) => {


        try {
            const [ rows] = await db.query("SELECT * FROM solicitudes");
    res.json(rows)
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las solicitudes" });

    }

}








    export const addSolicitud = async (req,res) => {


            try{
                const  { descripcion } = req.body;
                await db.query ("INSERT INTO solicitudes (descripcion)  VALUES (?)"[descripcion]);
                    res.status(201).json({ message: "Solcitud creada" });




            } catch (error){
                console.error(error);
                res.status(500).json({ message: "Error al agregar la solicitud" });
            }


        }






    export const deleteSolicitud = async (req,res) => {
        const {id} = req.params;


            try{
                await db.query("DELETE FROM solicitudes WHERE id = ?"[id]);
                res.json({ message: "solcitud elminada"})

            } catch (error){
                console.error(error);
                res.status(500).json({ message: "Error al eliminar la solicitud" });
            }

        }



   






   