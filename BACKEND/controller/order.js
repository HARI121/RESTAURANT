const order = require('../models/order')
exports.getorder=(req, res)=>{
    const Name = req.body.Name;
    const Address = req.body.Address;
    const Landmark = req.body.Landmark;
    const District = req.body.District;
    const state = req.body.state;
    const contact = req.body.contact;
    const pincode = req.body.pincode;
    const quantity = req.body.quantity;
    const delivery = req.body.delivery;
    const PlaceOrder = new order({ Name:Name, Address:Address, Landmark:Landmark, District:District, state:state, contact:contact, pincode:pincode, quantity:quantity, delivery:delivery});
    PlaceOrder.save().then(result =>{
        res.status(200).json({message: "Order Placed Successfully", order: result})
}).catch(err =>{
    res.status(500).json({message: err})
})
}