const dotenv=require('dotenv');
dotenv.config();
const {PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {createTransport}=require('nodemailer');

const sender=process.env.EMAIL_SENDER;
const password=process.env.EMAIL_PASSWORD;
const JWT_SECRET=process.env.JWT_SECRET;

const transporter=createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:sender,
        pass:password
    }
})

const registerUser=async({username,email,password,profile})=>{
    const receiver=email;
    const hashedPassword=await bcrypt.hash(password,10);
    console.log('original password',`${password}`,'hashedpassword',`${hashedPassword}`);

    const token=jwt.sign({username:username,password:hashedPassword,email:email,profile:profile},JWT_SECRET,{
        expiresIn:'1h',
    })
    const info=await transporter.sendMail({
        from:sender,
        to:receiver,
        subject:`[GadgetGlobe] Let's verify your email`,
        text:'Verify your email address to log in and get started.Click on the link below 👇',
        html:`
        <table>
        <tr>
      <td align="center">
            <a href="http://localhost:3005/auth/verify/${token}"
                             style="display: inline-block; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; font-size: 16px; border-radius: 5px;">Verify Email</a>
           </td>
        </tr>
        </table>`
    });
    return {message:"Verification email sent. Please check your inbox!"};   
};

const verifyUser=async(token)=>{
    try{
        const userInfo=jwt.verify(token,JWT_SECRET);
        const {username,password,email,profile}=userInfo;
        const existingUser=await prisma.user.f
        if(existingUser){
            return {redirect:'http://localhost:5173/login'};
        }else{
            await prisma.user.create({
                data:{username,password,email,profile},

            });
            return {redirect:"http://localhost:5173/login"};
        }

    }catch(error){
        if (error.name === "TokenExpiredError") {
            throw new Error("Verification link expired. Request a new one.");
          }
          throw new Error("Verifification failed");
    }
}


module.exports={
    registerUser,
    verifyUser
}