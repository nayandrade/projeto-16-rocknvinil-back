import { getSuppliersProducts } from '../controllers/productsController.js';
import { validateSupplier } from '../middlewares/validateSupplier.js'
import { Router } from 'express';

const router = Router();

router.get('/products', validateSupplier, getSuppliersProducts);

export default router;