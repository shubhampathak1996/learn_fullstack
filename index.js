const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send({hi: "There"})
})
app.get('/greetings',(req,res)=>{
    res.send({hi: 'Mere bete gaand main jao'})
})

app.listen(PORT );