const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const userRoutes=require('./routes/userRoutes.cjs')
const app=express();
app.use(express.json())

dotenv.config();
app.use(cors())
app.use('/api/user',userRoutes);
// app.use('/product',ProductRoutes);
// app.use('/cart',cartRoutes);
// app.use('/wishlist',wishListRoues);
// app.use('/order',orderRoutes);
module.exports=app;