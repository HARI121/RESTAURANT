const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderplaceschema = new Schema({
    Name
    :{
        type:String,
        required:true
    },
Address:{
    type:String,
    required:true
},
Landmark:{
    type:String,
    required:true
},
District:{
    type:String,
    required:true
},
District:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
contact:{
    type:String,
    required:true
},
pincode:{
    type:String,
    required:true
},
quantity:{
    type:String,
    required:true
},
delivery:{
    type:Number,
    required:true
}
})
module.exports = mongoose.model('orderplace',orderplaceschema);