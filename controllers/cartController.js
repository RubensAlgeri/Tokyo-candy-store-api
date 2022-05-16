import { ObjectId } from "mongodb";
import db from "../db.js";

export async function getCart(req, res) {

    const { user } = res.locals;

    delete user.password;

    const cart = await db.collection('carts').findOne({_id: new ObjectId(user._id)})
    let total = 0;
    cart.forEach(item=>{
        total += item.price*1;
    })
    res.status(200).send({cart, total})
}
export async function removeProduct(req, res) {

    const id = req.params.id;
    const { user } = res.locals;

    delete user.password;

    const cart = await db.collection('carts').removeOne({_id: new ObjectId(id)})

    res.sendStatus(200);
}