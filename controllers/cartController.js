import db from '../db.js';
import { ObjectId } from "mongodb";

export async function postCart(req, res) {
    const { user } = res.locals;
    const cart = {
        product: req.body.product,
        quantity: req.body.quantity
    }

    await db.collection('carts').insertOne({ userId: user._Id, ...cart });
    res.sendStatus(201);
}

export async function getCart(req, res) {

    const { user } = res.locals;

    delete user.password;

    const cart = await db.collection('carts').findOne({ _id: new ObjectId(user._id) })
    let total = 0;
    cart.forEach(item => {
        total += item.price * 1;
    })
    res.status(200).send({ cart, total })
}