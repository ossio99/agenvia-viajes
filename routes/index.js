import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
} from "../controllers/paginasController.js";
import { 
    guardarTestimonial 
} from "../controllers/testimonialController.js";

//usamos la misma instancia pero usando su router ya que solo se puede tener una instancia de express
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

//comodin
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

// router.get('/contacto', (req, res) => {
//     res.render('contacto');
// });

export default router;