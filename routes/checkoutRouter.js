import { Router } from 'express';
import { postOrder } from '../controllers/checkoutController.js';
import { validaToken } from '../middlewares/authMiddleware.js';

const checkoutRouter = Router();
checkoutRouter.use(validaToken);

checkoutRouter.post("/checkout", postOrder);
export default checkoutRouter;