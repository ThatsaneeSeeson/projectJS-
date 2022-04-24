
const express = require('express') 
const path = require('path')
const router = require('./router/routes')
const app = express()   // เก็บ express ไว้ในตัวแปร app

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)
app.use(express.static(path.join(__dirname,'public')))  
app.use(express.static(path.join(__dirname,'public/image')))    // อ้างอิงข้อมูลไฟล์ static

//app.use(router)    // เรียกใช้ router

app.set('views',path.join(__dirname,'views'))    // อ้างอิงตำแหน่ง template
app.set('view engine','ejs')

app.listen(8080,()=>{
    console.log("รัน server port 8080");


    require =('./db')

})


