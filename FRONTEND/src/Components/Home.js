import React from 'react';
import '../Styles/home.css'
import Wallpaper from './Wallpaper';
import Quicksearch from './Quicksearch';
import axios from 'axios';
class Home extends React.Component{
    constructor(){
    super();
    this.state = {
        locations:[],
        mealtypes:[]
    }
    }
    componentDidMount(){
        sessionStorage.setItem('area', undefined);
        sessionStorage.setItem('city', undefined);
        axios({
            method:'GET',
            url:'http://localhost:3008/location',
            headers: { 'content-type': 'application.json' }
            }).then(response =>this.setState({locations: response.data.location})).catch(err => console.log(err))
        axios({
            method:'GET',
            url:'http://localhost:3008/mealtype',
            headers: { 'content-type': 'application.json' }
            }).then(response =>this.setState({mealtypes: response.data.mealtype})).catch(err => console.log(err))

}
    render(){
        const { locations, mealtypes } = this.state;
       return(
           <React.Fragment>
               <Wallpaper locations={locations}/>
               <Quicksearch mealtypes={mealtypes}/>
        </React.Fragment>

       ) 
    }
}
export default Home;