//importamos express
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

//funcion de express para ejecutarlo
const app = express();

//conectar la base de datos
db.authenticate()
    .then(() => console.log('base de datos conectada'))
    .catch(error => console.log(error));

//definir puerto
//variable de entorno
const port = process.env.PORT || 4000;

//habilitar pug
//view engine es unos de los valores que acepta express
app.set('view engine', 'pug');

//pasarle el año actual al objeto locals
//middelware propio
//next te lleva al sig middelware
app.use((req, res, next) => {
    // console.log(res)
    const year = new Date();

    //express usa algo llamado locals que un objeto con como variables internas de express
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
})

//esta carpeta va a ser a lo que el usuario 
//definir carpeta publica tenga acceso sin tener acceso a las demas rutas
app.use(express.static('public'));

//agregar body parser para leeer los datos del formulario
app.use(express.urlencoded({extended: true}));

//agregar router
//use es un verbo que soporta todos los demas
//en este caso le decimos a use que en la pagina principal agregue router
app.use('/', router)

//arrancamos el servidor
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`);
})