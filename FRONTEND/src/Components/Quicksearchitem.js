import React from 'react';
import {withRouter} from 'react-router-dom';
class Quicksearchitem extends React.Component{
    handleClick = (id) =>{
        const mealtype = id;
        const area = sessionStorage.getItem('area');
        const city = sessionStorage.getItem('city');
        this.props.history.push(`/filter/?mealtype=${mealtype}&area=${area}&city=${city}`);
    }
render(){
    const { id, name, content, image} = this.props;
return (
<div class="col-sm-12 col-md-12 col-lg-4" onClick={() => this.handleClick(id)}>
<div class="tileContainer">
    <div class="tileComponent1">
        <img src={require('../img/'+image)} height="150" width="140" />
    </div>
    <div class="tileComponent2">
        <div class="componentHeading">
            {name}
        </div>
        <div class="componentSubHeading">
            {content}
        </div>
    </div>
    
</div>
</div>
)
}
}
export default withRouter(Quicksearchitem);