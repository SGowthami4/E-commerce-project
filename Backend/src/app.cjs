const cors=require('cors')
const express=require('express')
const dotenv=require('dotenv')
const userRoutes=require('./routes/userRoutes.cjs')
const productRoutes=require('./routes/productRoutes.cjs')
const app=express();
app.use(express.json())
const cookieParser=require('cookie-parser');
app.use(cookieParser());


dotenv.config();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use('/user',userRoutes);
module.exports=app;
app.use('/product',productRoutes);
// app.use('/cart',cartRoutes);
// app.use('/wishlist',wishListRoues);
// app.use('/order',orderRoutes);