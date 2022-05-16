import db from '../dbProducts.js';
import { ObjectId } from 'mongodb';

export async function getProducts(req, res) {
    try {
        const products = await db.collection("products").find({}).toArray();
        res.send(products);
    } catch {
        console.log('deu ruim');
        res.send('Erro ao buscar produtos');
    }
}

export async function getProduct(req, res) {
    const id = req.params.id;
    console.log(id);
    try {
        const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
        res.send(product);
    } catch (error) {
        console.log('deu ruim', error);
        res.send('Erro ao buscar produtos');
    }
}