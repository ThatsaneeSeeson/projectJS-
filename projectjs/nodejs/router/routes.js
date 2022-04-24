// routing  จัดการการรับส่งข้อมูล
const express = require('express') // ดึง express มาใช้งาน
const User = require('../data/data')
const router = express.Router()



router.get('/index',(req,res)=>{         //แสดงผลเนื้อหาใน views
    res.render('index.ejs')
})

router.get('/home',(req,res)=>{         //แสดงผลเนื้อหาใน views
    res.render('home.ejs')
})

// ส่วนของการ login
router.get('/login',(req,res)=>{    
  res.render('login.ejs')     //แสดงผลเนื้อหาใน views
   
})
router.post('/login',async(req,res)=>{
  const {userID,password} = req.body
  const user = await User.findOne({
    userID,
    password
  })
  if(user){
    req.user = user
    res.render('index',{user})
  }
  else{
    res.render('login')
  }
})

router.post('/register',(req, res) => {
  const user = new User({

      name :  req.body.name,
      password : req.body.password
      
  })
user.save()
})





module.exports = router   // export router ให้ไฟล์อื่นใช้งาน