import db from '../db.js';

export async function getCart(req, res) {
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer', '').trim();
    if(!token) return res.sendStatus(401);

    try {
        const session = await db.collection('sessions').findOne({token});
        if(!session) return res.sendStatus(401);

        const user = await db.collection('carts').find({userId: session.userId}).toArray();
        if(!user) return res.sendStatus(404);

        user.map(item => {
            delete item._id;
            delete item.userId;
        });
        //res.locals.user = user;
        //next();
        console.log('user', user);
        res.send(user);
    } catch {
            res.status(404).send('TOKEN inválido');
            console.log('TOKEN inválido');
        }
}

export async function postCart(req, res) {
    const { authorization } = req.headers;
    const cart = {
        product : req.body.product,
        quantity : req.body.quantity
    }

    const token = authorization?.replace('Bearer', '').trim();
    if(!token) return res.sendStatus(401);

    try {
        const session = await db.collection('sessions').findOne({ token });
        if(!session) return res.sendStatus(401);

        await db.collection('carts').insertOne({userId: session.userId, ...cart});
        res.sendStatus(201);
    } catch (error) {
        res.send(error).status('token invalido');
    }
}