import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { restaurantRouter } from './Routers/Restaurant.js';
import { postingReview } from './Routers/Reviews.js';

const app = express();
dotenv.config()

// middleWares
app.use(cors());
app.use(express.json());



app.use('/api/v1' ,restaurantRouter);
app.use('/',postingReview)

app.all('*',(req,res)=>{
    res.send('not found')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('server is up and running');
})