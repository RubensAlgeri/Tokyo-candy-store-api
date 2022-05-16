import db from '../db.js';
import { ObjectId } from "mongodb";

export async function postCart(req, res) {
    const { user } = res.locals;
    const cart = {
        product: req.body.product,
        quantity: req.body.quantity
    }
    const id = req.params.id;

    await db.collection('carts').insertOne({ userId: id, ...cart });

    res.sendStatus(201);
}

export async function getCart(req, res) {

    const { user } = res.locals;
    const id = req.params.id;
    delete user.password;

    const cart = await db.collection('carts').find({ userId: id }).toArray();

    res.status(200).send(cart)
}
export async function removeProduct(req, res) {

    const id = req.params.id;
    const { user } = res.locals;

    delete user.password;

    await db.collection('carts').removeOne({_id: new ObjectId(id) })

    res.sendStatus(200);
}