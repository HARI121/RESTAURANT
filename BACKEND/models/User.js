const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Userschema = new Schema({
    email:{
        type:String,
        required:true
    },
firstname:{
    type:String,
},
lastname:{
    type:String,
},
password:{
    type:String,
    required:true
}
})
module.exports = mongoose.model('User',Userschema);