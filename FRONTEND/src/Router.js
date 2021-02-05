import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Filter from './Components/Filter';
import Header from './Components/Header';
import Details from './Components/Details';
import Order from './Components/Order'
//import signup from './Components/signup';
const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route  path="/filter" component={Filter} />
        <Route  path="/details" component={Details} />
        <Route  path="/order" component={Order} />
        </BrowserRouter>   
         )
}
export default Router;