const express = require('express')
const router = express.Router();
const verify_token = require('../middleware/verify_token')
let listProduct = [
    {id:'1',name:'quần áo' ,price:11000},
    {id:'2',name:'giày' ,price:54666},
    {id:'3',name:'mũ' ,price:4550},
    {id:'4',name:'tất' ,price:857343},
    {id:'5',name:'điện thoại' ,price:6500},
    {id:'6',name:'laptop' ,price:88000},
]
router.get('/product',verify_token, (req,res)=>{
    res.json(listProduct)

})


module.exports = router