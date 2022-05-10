import express from 'express';
import cors from "cors"


const app = express();
app.use(cors())
app.use(express.json());

const porta = process.env.PORT
app.listen(porta, () => {
    console.log(`Server is listening on port ${porta}.`);
});