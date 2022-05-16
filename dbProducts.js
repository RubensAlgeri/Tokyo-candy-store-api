import { MongoClient } from 'mongodb';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI2);

await mongoClient.connect();

const db = mongoClient.db("productsDataBase");
console.log(chalk.bold.blue("Banco de dados MongoDB Products conectado!"));
export default db;