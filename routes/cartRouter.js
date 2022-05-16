import { Router } from 'express';
import { getCart, postCart } from '../controllers/cartController.js';
import { validaToken } from '../middlewares/authMiddleware.js';


const cartRouter = Router();
cartRouter.use(validaToken);

cartRouter.post('/cart', postCart);
cartRouter.get("/cart", getCart);
cartRouter.delete("/cart/:id", getCart);

export default cartRouter;