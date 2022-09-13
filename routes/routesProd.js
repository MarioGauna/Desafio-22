import { Router } from "express";
import * as productControl from '../controllers/prodControl.js';
//import auth from '../middleware/auth.js';

const router = new Router();


router.get('/',productControl.getAll);

router.get('/:id',productControl.getById);

router.post('/',productControl.create);

router.put('/:id',productControl.update);

router.delete('/:id',productControl.remove);

export default router