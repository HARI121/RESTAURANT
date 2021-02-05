import '../Styles/signup.css';
import React from 'react';
import axios from 'axios';

class signup extends React.Component{
    constructor(){
        super();
        this.state = {
            FN:'',
            LN:'',
            Age: 0
        }
    }
    handlechange = (event, state) => {
        this.setState({[state]:event.target.value})
    }
    handleSubmit = () =>{
        const {LN,FN,Age}=this.state;
        const account = {
            FirstName:FN,
            LastName:LN,
            age:Age
        }
        axios({
            method:'POST',
            url:'http://localhost:3008/signup',
            Headers:{'content-Type':'application.json'},
            data:account
        }).then().catch()
    }
    render(){
        const { LN, FN, Age}=this.state;
        return (
            <div className="sign">
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input type="text" value={FN} onChange={(event) => this.handlechange(event, 'FN')}/><br/>
                    <label>Last Name</label>
                    <input type="text" value={LN} onChange={(event) => this.handlechange(event, 'LN')}/><br/>
                    <label>Age</label>
                    <input type="number" value={Age} onChange={(event) => this.handlechange(event, 'Age')}/><br/>
                    <input type="submit"/><br/>
                </form>
            </div>
        )

    }
}

export default signup; 