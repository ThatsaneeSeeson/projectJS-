// เรียกใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมกับ mongodb
const dburl = 'mongodb://localhost:27017/userDatabase'     // จัดเก็บตำแหน่ง mongodb(localhostเอามาจาก mongodb ของเรา)
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedToPology:true
    
}).catch(err => console.log(err))               // กรณีมีข้อผิดพลาดในการเรักยใช้ mongodb

// สร้าง schma
const userSchema = new mongoose.Schema({
    username : String,
    password : String


})

// สร้าง model
let User = mongoose.model("User",userSchema)




// export ออกไปใช้งาน
module.exports = User