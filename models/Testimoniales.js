import Sequelize from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', {
    //id no es necesario porque el orm da por hecho que existe
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})