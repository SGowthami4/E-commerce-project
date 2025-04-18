const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const userRoutes=require('./routes/userRoutes.cjs')
const app=express();
app.use(express.json())
const cookieParser=require('cookie-parser');


dotenv.config();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use('/user',userRoutes);
app.use(cookieParser());
module.exports=app;
// app.use('/product',ProductRoutes);

// app.use('/cart',cartRoutes);
// app.use('/wishlist',wishListRoues);
// app.use('/order',orderRoutes);