const express = require('express')
const images = require('./public/js/carousel')
const app = express()
const userRouter=require('./router/userRouter')
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
app.set('views','./view/home')
app.use('/',userRouter)
app.listen(3000,()=>{
    console.log("server connected.....")
})