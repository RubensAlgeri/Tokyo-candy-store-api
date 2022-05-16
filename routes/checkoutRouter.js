import { Router } from 'express';
import { postOrder } from '../controllers/checkoutController.js';


const checkoutRouter = Router();
checkoutRouter.post("/checkout", postOrder);
export default checkoutRouter;