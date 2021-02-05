import React from 'react';
import '../Styles/home.css';
import axios from 'axios';
import { withRouter } from "react-router-dom";


class Wallpaper extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        suggestions:[],
        text:'',
        restaurants:[]
        }
    }
    onTextChange = (e) =>{
        const value = e.target.value;
        const { restaurants } = this.state;
        let suggestions = [];
        
        if(value.length > 0) {
            suggestions = restaurants.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        }
        this.setState(() => ({
            suggestions,
            text:value
        }))
    }
    selectedText(value){
        this.setState({
            text:value.name,
            suggestions:[],
        }, () =>{
            this.props.history.push(`/details/${value._id}`);
        })
    }
    renderSuggestions =() =>{
        let {suggestions} = this.state;

        if(suggestions.length===0){
            return null;
        }
        return(
            <ul id="ul">
                {
                    suggestions.map((item, index) => (<li id="li" key={index} onClick={() => this.selectedText(item)}>{`${item.name}, ${item.city_name}`}</li>)) 
                }
            </ul>
        )
    }
    handleChange = (event) => {
        const area = event.target.value.split('-')[0];
        const city = event.target.value.split('-')[1];

        sessionStorage.setItem('area', area);
        sessionStorage.setItem('city', city);
        axios({
            method:'GET',
            url:`http://localhost:3008/restaurantbyloc/${area}`,
            Headers:{'content-Type':'application/json'}
        }).then(res => this.setState({ restaurants: res.data.restaurant})).catch()
    }
    render(){
            const { locations } = this.props;
            const { text } = this.state;
        return(
           <div>
               <img src={require('../img/food.png')} style={{width: '100%', height:'450px', margin: 'auto'}}/>
                <div>
                <div className="logo">
                <p>e!</p>
                </div>
                <div className="headings">Find the best restaurants, cafes, bars</div>
        <div className="locationSelector">
            <select className="locationDropdown" onChange={this.handleChange}>
                <option value="0" selected disabled>Please select a city</option>
                {locations.map((item, index) =>{
                    return <option key={index} value={`${item.location_id}-${item.city_id}`}>{`${item.name},${item.city}`}</option>
                })}
                
            </select>
            <div>
                <div id="notebooks">
                <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" onChange={this.onTextChange} value={text}/>
                {this.renderSuggestions()}
                </div>
                <span className="glyphicon glyphicon-search search"></span>
            </div>
        </div>
            </div>
        </div>

       ) 
    }
}
export default withRouter(Wallpaper);