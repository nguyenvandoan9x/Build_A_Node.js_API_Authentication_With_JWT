const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.get('/user',async(req,res)=>{
    try{
        let user = await userModel.find({});
        res.json(user); 
    }catch(err){
        res.json(err);
    }
})
router.post('/user/login', async (req,res)=>{
    try{
        let user = await userModel.findOne({email: req.body.email});
        let checkPassword = await bcrypt.compare(req.body.password,user.password);
        if(checkPassword)
        {
            let token =  jwt.sign({userID: user._id}, 'shhhhh');
            res.json({token});
        }
        else{
            res.status(400).send('email or password not correct !');
        }
    }
    catch(err)
    {
        res.json(err)
    }
})
router.post('/user/register',async(req,res)=>{
    let hash = await bcrypt.hash(req.body.password,10);
    let user = new userModel({
        email: req.body.email,
        password:hash
    });
    await user.save();
    res.json(req.body);
})
module.exports = router;

