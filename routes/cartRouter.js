import { Router } from 'express';
import  { postCart, getCart } from '../controllers/cartController.js';

const cartRouter = Router();

cartRouter.post('/cart', postCart);
cartRouter.get('/cart', getCart);

export default cartRouter;