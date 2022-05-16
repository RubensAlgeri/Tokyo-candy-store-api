import db from "../db.js";

export async function postOrder(req, res) {

    const { user } = res.locals;

    delete user.password;

    await db.collection('orders').insertOne(req.body)

    await db.collection('carts').deleteOne({_id: new ObjectId(user._id)})

    res.sendStatus(201)
}