const express=require('express');
const app= express();
require('dotenv').config();

Port = process.env.BASE_URL

app.listen(Port,()=>{
    console.log(`server is running successfully http:localhost//${Port}`);
    
})
