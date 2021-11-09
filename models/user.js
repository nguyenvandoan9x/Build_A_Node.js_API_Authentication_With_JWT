const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{type: String, maxlength:200,unique:true, required:true,trim:true},
    password:{type:String, maxlength:255,required:true},

},
{
    timestamps:true
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel