const express = require('express');
const app = express();
const auth = require('./router/auth');
const connect = require('./DB/connect')
const routerProduct = require('./router/product')
connect();

app.use(express.json());

app.use('/api',auth);
app.use('/',routerProduct)

app.listen(3000,()=>{
    console.log('server runing');
})