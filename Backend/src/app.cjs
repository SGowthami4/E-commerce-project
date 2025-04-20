const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config();
const express=require('express')
const userRoutes=require('./routes/userRoutes.cjs')
const productRoutes=require('./routes/productRoutes.cjs')
const app=express();
app.use(express.json())
const cookieParser=require('cookie-parser');
app.use(cookieParser());


app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use('/user',userRoutes);
module.exports=app;
app.use('/products',productRoutes);
// app.use('/cart',cartRoutes);
// app.use('/wishlist',wishListRoues);
// app.use('/order',orderRoutes);