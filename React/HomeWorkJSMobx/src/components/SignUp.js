import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const SignUp = ( props ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmation, setConfirmation] = useState('');
  const isAuthenticated = props.Store.isAuthenticated; 
  const history = useHistory();
  

  const handleSubmit = event => {
    event.preventDefault();

    props.Store.users.map( users =>{
      
    if(Confirmation==password){
      if(username !== '' && password !== '')
      if (username !== users.username) {
        props.Store.users.push({username, password})
        props.Store.setAuthentication(true);
        props.Store.setuName(username);
        history.push('/Content');
        return(
        // <p>User {username} created</p>
        alert('user '+username+' created')
        )
      }
    }
    else{
      alert("Please, confirm your password correctly !")
    }
  })
  }

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  }

  const handleChangePassword = event => {
    setPassword(event.target.value);
  }

  const handleChangeConfirmation = event => {
    setConfirmation(event.target.value);
  }

  return (
    <div>
      { isAuthenticated ? 
       (<Redirect to="/Content"></Redirect>) : null
      }
      <h1>Please, Sign Up to see page content ...</h1>
      <form onSubmit={handleSubmit}>
        <h2 className='title'>Sign Up</h2>
        <input className='form-input' type='text' placeholder='Username' onChange={handleChangeUsername}/>
        <input className='form-input' type='password' placeholder='Password' onChange={handleChangePassword}/>
        <input className='form-input' type='password' placeholder='Confirm Password' onChange={handleChangeConfirmation}/>
        <button className='form-btn' >Sign Up</button>
      </form>
    </div>
  );
};

export default inject('Store')(observer(SignUp));
