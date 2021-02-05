const express= require('express');


var citycontroler=require('../controller/City');
var mealcontroler=require('../controller/mealtype');

var rescontroler=require('../controller/restaurant');
var usercontroler=require('../controller/User');
var ordercontroler=require('../controller/order')

const router=express.Router();

router.get('/location',citycontroler.getlocation);
router.get('/mealtype',mealcontroler.getmealtype);
router.get('/restaurant/:city',rescontroler.getresbycity);
router.get('/restaurantbyloc/:locationid',rescontroler.getresbylocality);
router.get('/restaurantbyid/:resId',rescontroler.getRestaurantById);
router.post('/filter', rescontroler.filter);
router.post('/signup', usercontroler.signUp);
router.post('/login', usercontroler.login);
router.post('/order', ordercontroler.getorder);
module.exports=router;