const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Working...")
})

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`);
})