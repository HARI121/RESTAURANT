const city = require('../models/City');

exports.getlocation=(req, res)=>{
    city.find().then(result =>{
        res.status(200).json({message: "fetch succesfully", location: result})
}).catch(err =>{
    res.status(200).json({message: err})
})
}

