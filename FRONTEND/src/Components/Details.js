import React from 'react';
import axios from 'axios';
import '../Styles/details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor      :   'orangered',
      border                : 'solid 2px black',
      width: '500px',
      height: '350px'
    }
  };

const custommodel = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor      :   'white',
        border                : 'solid 2px black',
        width: '600px',
        height: '470px'
      }

}

class Details extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurant:{},
            OrderModalIsOpen:false,
            payModalIsOpen:false,

        }
    }
    componentDidMount() {
        const restaurantId = this.props.location.pathname.split('/')[2];
    axios({
        method:'GET',
        url:'http://localhost:3008/restaurantbyid/' + restaurantId,
        headers:{ 'content-Type':'application/json'}
    }).then(response => this.setState({restaurant:response.data.restaurant[0]}))
    .catch(err =>console.log(err))
    }
    handleorder = () =>{
        if(sessionStorage.getItem('isLoggedIn')){
            this.setState({OrderModalIsOpen:true});
            
        }
        else{
        alert("please login");
    }
}
handlepay = () => {
    this.props.history.push('/order');
}
handleback = () =>{
    this.setState({OrderModalIsOpen:false});
}
handlechange = (event, state) => {
    this.setState({[state]:event.target.value})
}
    render(){
        const { restaurant, OrderModalIsOpen } = this.state;
        return( 
          <div>
          {restaurant !=null ?  
          <React.Fragment>
            <Carousel>
              <div className="thumbb">
                    <img src={restaurant.thumb}  />
                </div>
            </Carousel>
          <div className="n">{restaurant.name}</div><button style={{float:'right', width: '200px',height: '32px' }} className="btn btn-sm btn-danger" onClick={this.handleorder}>Place Online Order</button>
            <Tabs>
      <TabList>
      <Tab> Overview</Tab>
      <Tab> Contact</Tab>
      </TabList>
      
      <TabPanel>
      <h2 className='head'>About this place</h2>
      <h3 className='head'>Cuisine</h3>
      <h4>{restaurant && restaurant.cuisine && restaurant.cuisine.map((item) =>{
        return <div className="cu">{item.name}</div>
    })}</h4>
      <h3 className='head'>Average Cost</h3>
      <h4 className="min">&#8377;{restaurant.min_price}</h4>
      </TabPanel>
      <TabPanel>
      <h3 className='ph'>Phone number</h3>
      <h4 className='phin'>{restaurant.contact}</h4>
<h3 className='head'>{restaurant.name}</h3>
      <div><h4 className='tail'>{restaurant.address}</h4></div>
      </TabPanel>
      </Tabs>
                <Modal
                    isOpen={OrderModalIsOpen}
                    style={custommodel}
                >
                <div>
                    <h3 className="The-Big-Chill-Cakery">{restaurant.name}</h3>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    {restaurant && restaurant.type && restaurant.type.map((item) =>{
                            return(
                                <div id="ite">
                                <span class="veg-indian-vegetarian"></span>
                                    <div className="itemname">{item.mealtype}</div><button style={{float:'right'}} className="btn btn-sm btn-danger" onClick={this.handlepay} >Pay now</button>
                            <div className="itemname">&#8377;{item.price}</div><button style={{float:'right'}} className="btn btn-sm btn-danger" onClick={this.handleback} >Cancel</button>
                            </div>
)
                        })}
                        </div>
                        
                </div>
            </Modal>
      </React.Fragment> :null }
      </div>

        )
    }
}
export default Details;