const User = require('../models/User');
exports.login=(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    User.find({email:email, password:password})
    .then(result =>{
        if(result.length>=1){
            res.status(200).json({message: "User logged in Succesfully", User: result, isAuthenticated : true})
        }
        else{
            res.status(200).json({message: "email and password incorrect ", User: result, isAuthenticated:false})
        }
    })
.catch(err =>{
    res.status(500).json({message: err})
})
}

exports.signUp=(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const SignInUser = new User({email:email, password:password, firstname:firstname, lastname:lastname});
    SignInUser.save().then(result =>{
        res.status(200).json({message: "User Signed Up Succesfully", User: result})
}).catch(err =>{
    res.status(500).json({message: err})
})
}
