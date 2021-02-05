const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mealschema = new Schema({
name:{
    type:String,
    required: true
},
id:{
    type:String
},
content:{
    type:String
},
image:{
    type:String,
    required:true
}
})
module.exports = mongoose.models.mealtype || mongoose.model('mealtype',mealschema);