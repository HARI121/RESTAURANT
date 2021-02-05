import React from 'react';
import '../Styles/home.css';
import Quicksearchitem from './Quicksearchitem';
class Quicksearch extends React.Component{
    render(){
        const { mealtypes } = this.props;
       return (  <div class="quicksearch">
       <p class="quicksearchHeading">
           Quick Searches
       </p>
       <p class="quicksearchSubHeading">
           Discover restaurants by type of meal
       </p>
       <div class="container-fluid">
       <div class="row">
           { mealtypes.map((item) =>{
              return <Quicksearchitem id={item.id} name={item.name} content={item.content} image={item.image}/>
              })}
           </div>
           </div>
           </div>
    
       )}}          
       
export default Quicksearch;