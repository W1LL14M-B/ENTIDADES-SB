import expreess from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"


dotenv.config();
const app = expreess();
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
console.log(`servicio se esta ejecutando en el puerto ${process.env.PORT}`)
});

