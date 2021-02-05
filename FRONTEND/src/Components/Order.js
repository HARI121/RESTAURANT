import React from 'react';
import axios from 'axios';
import '../Styles/order.css';
class Order extends React.Component{
    constructor(){
        super();
        this.state = {
            Name:'',
            Address:'',
            Landmark:'',
            District:'',
            State:'',
            contact:'',
            pincode:'',
            quantity:'',
            delivery:'',
        }
    }
    handlechange = (event, state) => {
        this.setState({[state]:event.target.value})
    }
    handlecod = () =>{
        const { Name, Address, Landmark, District, state, contact, pincode, quantity, delivery }=this.state;
        const ship = {
            Name:Name,
            Address:Address,
            Landmark:Landmark,
            District:District,
            state:state,
            contact:contact,
            pincode:pincode,
            quantity:quantity,
            delivery:delivery
        }
        axios({
            method:'POST',
            url:'http://localhost:3008/order',
            Headers:{'content-Type':'application.json'},
            data:ship
        }).then(
            alert("ORDER SUCCESFULLY PLACED ")).catch()
            this.props.history.push('/')
        }



render(){
    const { Name, Address, Landmark, District, state, contact, pincode, quantity, delivery }=this.state;
    return (
        <div className="sign">
            <h1 id="sa">Shipping Address</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                <label style={{marginLeft:'185px', marginLeft: '185px'}}className="nm" >Name</label>
                <input style={{marginLeft:'39px'}}type="text" value={Name} name="Name" onChange={(event) => this.handlechange(event, 'Name')} required/><br/>
                <label style={{marginLeft:'185px'}}>Address</label>
                <input type="text" style={{height:'80px', marginLeft:'25px'}}value={Address} onChange={(event) => this.handlechange(event, 'Address')} required/><br/>
                <label style={{marginLeft:'185px', }}>Landmark</label>
                <input style={{marginLeft:'12px'}} type="text" value={Landmark} onChange={(event) => this.handlechange(event, 'Landmark')} required/><br/>
                <label style={{marginLeft:'185px'}}>District</label>
                <input style={{marginLeft:'30px'}}type="text" value={District} onChange={(event) => this.handlechange(event, 'District')} required/><br/>
                <label style={{marginLeft:'185px'}}>state</label>
                <input style={{marginLeft:'46px'}}type="text" value={state} onChange={(event) => this.handlechange(event, 'state')} required/><br/>
                <label style={{marginLeft:'185px'}}>contact</label>
                <input style={{marginLeft:'29px'}}type="text" value={contact} onChange={(event) => this.handlechange(event, 'contact')} required/><br/>
                <label style={{marginLeft:'185px'}}>pincode</label>
                <input style={{marginLeft:'25px'}}type="text" value={pincode} onChange={(event) => this.handlechange(event, 'pincode')} required/><br/>
                <label style={{marginLeft:'185px'}}>quantity</label>
                <input style={{marginLeft:'22px'}}type="text" value={quantity} onChange={(event) => this.handlechange(event, 'quantity')} required/><br/>
                <label style={{marginLeft:'185px'}}>contact</label>
                <input style={{marginLeft:'29px'}}type="text" value={delivery} onChange={(event) => this.handlechange(event, 'delivery')} required/><br/>
                </div>
                <div>
                    <button style={{marginLeft:'650px', width:'50px',width: '118px',marginTop: '-410px'}}className="btn btn-sm btn-warning" onClick={this.handlecod}>COD</button>
                </div>
            </form>
        </div>
    )

}
}
export default Order; 