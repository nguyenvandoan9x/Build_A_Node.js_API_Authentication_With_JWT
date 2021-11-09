const mongoose = require('mongoose');

module.exports = async ()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/restapi')
        console.log('connect success');
    }
    catch(err)
    {
        console.log(err);
        console.log('connect false');
    }
}
