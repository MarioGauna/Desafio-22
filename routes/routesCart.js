import { Router } from "express";
import * as cartControl from '../controllers/cartControl.js';

const router = new Router();

router.post('/', cartControl.create);

router.get('/:id/productos', cartControl.getProducts);

router.post('/:id/productos', cartControl.addProduct);

router.delete('/:id/productos/:id_prod', cartControl.removeProduct);

router.delete('/:id', cartControl.remove);

export default router