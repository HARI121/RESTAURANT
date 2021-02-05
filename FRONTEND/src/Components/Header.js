import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

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
      width: '445px',
    height: '255px'
    }
  };

class Header extends React.Component{
    constructor(){
    super();
    this.state = {
        signUpModalIsOpen:false,
        loginModalIsOpen:false,
        email:'',
        password:'',
        FN:'',
        LN:'',
        isLoggedIn:false
    }
    }
    signUp = () =>{
        this.setState({signUpModalIsOpen:true});
    }
    login = () =>{
        this.setState({loginModalIsOpen:true});
    }
    handleCancelSignUp =() =>{
        this.setState({signUpModalIsOpen:false});
    }
    handleCancelLogin =() =>{
        this.setState({loginModalIsOpen:false});
    }
    handlechange = (event, state) => {
        this.setState({[state]:event.target.value})
    }
    handlechangesignup =() =>{
        const{email,password,FN,LN} = this.state;
        const signUpObj = {
        email: email,
        password: password,
        firstname:FN,
        lastname:LN
        };
        axios({
            method:'POST',
            url:'http://localhost:3008/signup',
            Headers:{'content-Type':'application/json'},
            data:signUpObj
        }).then(response =>{
            if(response.data.message == 'User Signed Up Succesfully'){
                this.setState({
                    signUpModalIsOpen:false,
                    email:'',
                    password:'',
                    FN:'',
                    LN:''
                });
                alert(response.data.message);
            }
    })
    .catch(err => console.log(err))
}
handlechangelogin = () =>{
    const{email,password} = this.state;
        const loginObj = {
        email: email,
        password: password
    };
    axios({
        method:'POST',
        url:'http://localhost:3008/login',
        Headers:{'content-Type':'application/json'},
        data:loginObj
    }).then(response =>{
        if(response.data.message=="User logged in Succesfully"){
        this.setState({isLoggedIn:response.data.isAuthenticated,
                       loginModalIsOpen:false,
                       email:'',
                       password:'',
                    });
                    alert(response.data.message);
                }
        else{
            alert("incorrect email or password");
            this.setState({loginModalIsOpen:true,
            email:'',
            password:''});
        }
        sessionStorage.setItem('isLoggedIn',response.data.isAuthenticated);
    }).catch(err => console.log(err))
}
        render(){
            const {signUpModalIsOpen,loginModalIsOpen,email,password,FN,LN} = this.state;
        return(
            <div style={{width: '100%', height: '50px', backgroundColor: 'red'}}>
                <div className="btn-group" style={{float: 'right', paddingRight: '20px', paddingTop: '5px' }}>
                <button onClick={this.login}className="btn-btn-sm btn success">login</button>
                <button onClick={this.signUp}className="btn-btn-sm btn success">create account</button>
                </div>
                <Modal
                    isOpen={signUpModalIsOpen}
                    style={customStyles}
                >
                <div>
                    <h1 style={{textAlign:'center'}}>Create Account</h1>
                    <div><span>First Name :</span><input style={{marginLeft: '125px'}}type="text" value={FN} onChange={(event) => this.handlechange(event, 'FN')}/></div>
                    <div><span>Last Name :</span><input style={{marginLeft: '126px'}}type="text" value={LN} onChange={(event) => this.handlechange(event, 'LN')}/></div>
                    <div><span>Email :</span><input style={{marginLeft: '159px'}} type="text" value={email} onChange={(event) => this.handlechange(event, 'email')}/></div>
                    <div><span>Password :</span><input style={{marginLeft: '134px'}}type="password" value={password} onChange={(event) => this.handlechange(event, 'password')}/></div>
                    <div style={{marginLeft:'118px',marginTop:'18px'}}><button style={{backgroundColor: 'cyan'}} onClick={this.handlechangesignup}className="btn-btn-sm btn primary">SignUp</button>
                    <button className="btn-btn-sm btn primary" onClick={this.handleCancelSignUp}>Cancel</button>
                </div></div>
                </Modal>
                <Modal
                    isOpen={loginModalIsOpen}
                    style={customStyles}
                >
                <div >
                    <h1 style={{textAlign:'center'}}>Login</h1>
                    <div><span>Email :</span><input style={{marginLeft: '155px'}} type="text" value={email} onChange={(event) => this.handlechange(event, 'email')}/></div>
                    <div><span>Password :</span><input style={{marginLeft: '130px'}}type="password" value={password} onChange={(event) => this.handlechange(event, 'password')}/></div>
                   <div  style={{marginLeft: '120px',marginTop: '35px'}}> <button style={{backgroundColor:'dodgerblue'}}onClick={this.handlechangelogin}className="btn-btn-sm btn primary">Login</button>
                    <button className="btn-btn-sm btn primary" onClick={this.handleCancelLogin}>Cancel</button>
                </div>
                </div>
                </Modal>
            </div>
        )
    }
}
export default Header;