const app=require('./app.cjs')
require("dotenv").config()

const port=3500;

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})