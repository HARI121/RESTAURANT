const restaurant = require('../models/restuarant');

exports.getresbycity=(req, res)=>{
    const Cityname = req.params.city;
    restaurant.find({city_name: Cityname}).then(result =>{
        res.status(200).json({message: "fetch succesfully", restaurant: result})
}).catch(err =>{
    res.status(200).json({message: err})
})
}
exports.getresbylocality=(req, res)=>{
    const locid = req.params.locationid
    restaurant.find({location_id:locid}).then(re =>{
        res.status(200).json({message: "fetch succesfully", restaurant: re})
}).catch(err =>{
    res.status(200).json({message: err})
})
}
exports.getRestaurantById = (req, res) => {
    const resId = req.params.resId;
    restaurant.find({_id: resId }).then(rest =>{
        res.status(200).json({message: "fetch succesfully", restaurant: rest})
}).catch(err =>{
    res.status(200).json({message: err})
})
}
exports.filter=(req, res)=>{
    const queryParams = req.body;
    const location_id = queryParams.location_id;
    const cuisine = queryParams.cuisine;
    const mealtype_id = queryParams.mealtype_id;
    const hcost = queryParams.hcost;
    const lcost = queryParams.lcost;
    const page = queryParams.page ? queryParams.page : 1;  
    const sort = queryParams.sort ? queryParams.sort : 1;
    const perPageCount =  queryParams.perPageCount ? queryParams.perPageCount: 5;
    let start;
    let end;
    start = Number(page * perPageCount) - perPageCount;
    end = Number(page * perPageCount);
    let payload = {};

    if (mealtype_id) {

        payload = {
            mealtype_id: Number(mealtype_id)
        }
    }
    if (location_id) {
        payload = {
            location_id: Number(location_id)
        }
    }
    if (cuisine) {
        console.log(cuisine);
        payload = {
            cuisine: {$in:cuisine}
        }
    }
    if (hcost && lcost) {
        payload = {
            min_price: { $gt: lcost, $lt: hcost }
        }
    }
    if (mealtype_id && hcost && lcost) {
        payload = {
            mealtype_id: Number(mealtype_id),
            min_price: { $gt: lcost, $lt: hcost }
        }
    }
    if (mealtype_id && location_id) {
        payload = {
            location_id: Number(location_id),
            mealtype_id: Number(mealtype_id)
        }
    }
    if (mealtype_id && cuisine) {
        payload = {
            cuisine: {$in:cuisine},
            mealtype_id: Number(mealtype_id)
        }
    }
    if (mealtype_id && cuisine && location_id) {
        payload = {
            cuisine: {$in:cuisine},
            mealtype_id: Number(mealtype_id),
            location_id: Number(location_id)
        }
    }
    if (mealtype_id && location_id && hcost && lcost) {
        payload = {
            mealtype_id: Number(mealtype_id),
            min_price: { $gt: lcost, $lt: hcost },
            location_id: Number(location_id)
        }
    }
    if (mealtype_id && location_id && hcost && lcost && cuisine) {
        payload = {
            mealtype_id: Number(mealtype_id),
            min_price: { $gt: lcost, $lt: hcost },
            location_id: Number(location_id),
            cuisine: {$in:cuisine}
        }
    }
    restaurant.find(payload).sort({ min_price: sort }).then(result => {
        const count = Math.ceil(result.length/5);
        const pageCountArr = [];
        const resultValues = result.slice(start, end);
        for(var i=1; i<=count; i++){
            pageCountArr.push(i);
        }
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: resultValues, pageCount: pageCountArr, totalCount : result.length })
    }).catch(err => console.log(err));

}