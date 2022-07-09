import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chalk from 'chalk';
import authRoutes from './routes/authRoutes.js'
import cartRoutes from './routes/cartRoutes.js';
import productsRouter from './routes/productsRouter.js'

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cartRoutes)
app.use(productsRouter)
app.use(authRoutes); 

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.red('Server running on port ' + process.env.PORT));
})