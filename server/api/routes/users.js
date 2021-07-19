const express = require('express');

// require('../models/cart');
let mongoose  = require('mongoose');
const app = express();
const User=require('../model/testquery');
const Logins=require('../model/signup'); //import signup.js
const Feedback=require('../model/feedback');
const Shipping=require('../model/shipping');
// var Addtocart =mongoose.model('product');
const Addtocart=require('../model/cart');
// var Addtocartt =mongoose.model('product');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }     
    })
})
  
router.post('/add',function(req,res){
    const name=req.body.name
    const avail=req.body.avail
    const quantity=req.body.quantity
    // const password=req.body.password
    const price=req.body.price
    new User({
        name:name,
        avail:avail,
        quantity:quantity,
        price:price
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})

router.post('/adds',function(req,res){
    const username=req.body.username
    const useremail=req.body.useremail
    const userpass=req.body.userpass
    // const password=req.body.password
    // const address=req.body.address
    new Logins({
        username:username,
        userpass:userpass,
        useremail:useremail
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})

router.post('/signin',(req,res)=>{
    const username = req.body.username;
    const userpass = req.body.userpass;
    // console.log(usename)
    Logins.findOne({
        username:username
    },(err,user)=>{
        if(err){
            res.json(err);
        }
        else{
            console.log(user);
            if(user == null ){
              res.json({message:"Check your Credentials"});
            }
            else if (user.userpass != userpass){
                res.json({message:"Check your password"});
            }
            else{
                res.json(user);
            }
        }
    })
})


router.post('/ads',function(req,res){
    const product=req.body.product
    // const avail=req.body.avail
    // const quantity=req.body.quantity
    // const password=req.body.password
    const price=req.body.price
    new Carts({
        product:product,
        price:price
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})

router.post('/productt',function(req,res){
    watchname=req.body.watchname,
    price=req.body.price,
    image=req.body.image
    new Addtocart({
        watchname:watchname,
        price:price,
        image:image       
    }).save(function(err,Addtocart){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
        console.log(Addtocart);
        res.json(Addtocart);
        }
  });
  });

  router.get('/productt', function(req,res){
    Addtocart.find(function(err,Addtocart){
      console.log(Addtocart);
      res.json(Addtocart);
    })
  })  


 
//////////////////////////////////////////////feedback data//////////////////////////////////////////
router.post('/fb',function(req,res){
    const fname=req.body.fname;
    const msg=req.body.msg;

    new Feedback({
        fname:fname,
         msg :msg
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////shipping address///////////////////////////////////////
router.post('/shipp',function(req,res){
    const fullname=req.body.fullname;
    const emaill=req.body.emaill;
    const mno=req.body.mno;
    const ad=req.body.ad;
    
    // const password=req.body.password
    // const address=req.body.address
    new Shipping({
        fullname:fullname,
         emaill :emaill,
         mno:mno,
         ad:ad
         
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        name : req.body.name,
        price:req.body.price,
        avail:req.body.avail,
        quantity:req.body.quantity
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit //////
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})

router.get('/deletewatch/:id', function(req, res) {
    var query = {"_id": req.params.id};
    Addtocart.findOneAndRemove(query, function(err, Addtocart){
      console.log(Addtocart)
      res.json(Addtocart);
    }); 
  });
module.exports = router;