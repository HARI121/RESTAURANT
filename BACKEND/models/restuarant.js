const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restaurantschema = new Schema({
name:{
    type:String,
    required: true
},
id:{
    type:String,
    required:true
},
area:{
    type:String,
    required:true
},
thumb:{
    type:String,
    required:true
},
mealtype_id:{
    type:String,
    required:true
},

aggregate_rating:{
    type:String,
},
min_price:{
    type:Number,
    required:true
},

rating_text:{
    type:String,
},
location_id:{
    type:String,
    required:true
},
locality:{
    type:String,
    required:true,
},
address:{
    type:String,
},
hcost:{
    type:String,
},
lcost:{
    type:String,
},
cuisine:[{
    id: {type: String, required: true},
    name: {type: String},
}]
})
module.exports = mongoose.models.restaurant || mongoose.model('restaurant',restaurantschema);