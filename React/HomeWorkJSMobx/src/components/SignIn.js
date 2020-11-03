import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = props.Store.isAuthenticated; 

  const handleSubmit = event => {
    event.preventDefault();
      props.Store.users.map( users =>{
      if (username === users.username && password === users.password) {
      props.Store.setAuthentication(username, password);
      props.Store.setuName(username);
      }
      else alert("Wrong username or password")
    })
  }

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  }

  const handleChangePassword = event => {
    setPassword(event.target.value);
  }

  return (
   
    <div>
      { isAuthenticated ? 
        (<Redirect to="/Content"></Redirect>) : null
      }
      <h1>Sign In to see page</h1>
      <form onSubmit={handleSubmit}>
      <h2 className='title'>Sign In</h2>
        <input className='form-input' type='text' placeholder='Username' onChange={handleChangeUsername}/>
        <input className='form-input' type='password' placeholder='Password' onChange={handleChangePassword}/>
        <button className='form-btn'>Sign In</button>
      </form>
   
    </div>
  );
};

export default inject('Store')(observer(SignIn));
