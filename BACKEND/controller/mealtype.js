const mealtype = require('../models/mealtype');

exports.getmealtype=(req, res)=>{
    mealtype.find().then(result =>{
        res.status(200).json({message: "fetch succesfully", mealtype: result})
}).catch(err =>{
    res.status(200).json({message: err})
})
}