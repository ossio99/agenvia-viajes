import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {

    //validar
    const { nombre, correo, mensaje } = req.body;
    //el request contiene una propiedad llamada body la cual contiene la informacion mandada por el formulario
    console.log(req.body);


    const errores = [];

    //trim() quita los espacios en blanco del inicio y final
    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }


    if(errores.length > 0) {

        //consultar testimoniales existentes
         const testimoniales = await Testimonial.findAll();
         console.log(testimoniales);

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else {
        try {
            //create() metodo de sequielize para crear registro en base al modelo y recibe un objeto con los valores
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            //para terminal la accion y que no se quede pensando redirigimos
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}