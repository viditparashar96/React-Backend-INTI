var express = require('express');
var router = express.Router();
var userSchema=require('./users')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',async (req,res,next)=>{
  var newUser=await userSchema.create({
    username:req.body.username,
    password:req.body.password
  })
  var createdUser=await newUser.save()
  console.log(createdUser)
})

module.exports = router;
