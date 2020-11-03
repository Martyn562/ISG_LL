import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from './SignIn';
import Content from "./Content";
import  Store  from "../stores/Store";
import { inject, observer } from "mobx-react";
import './App.scss'

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

class App extends React.Component {

  render() {
    return (
      <div>
        <div className='container'>
          <nav className="navbar-light">
            <ul className="navbar-nav">
              <li>
                <Link className='nav-item' to="/">Home</Link>
              </li>
              <li>
                <Link className='nav-item' to="/SignIn">SignIn</Link>
              </li>
              <li>
                <Link className='nav-item' to="/SignUp">SignUp</Link>
              </li>
              <li>
                <Link className='nav-item' to="/Content">Content</Link>
              </li>
              { this.props.Store.isAuthenticated ?
              <li>
                <button className='nav-btn' onClick={() => this.props.Store.SignOut(false) }>Sign Out</button>
              </li> : null
              }
              <li>
                <p className='uName'> {this.props.Store.uName}</p>
              </li>
            </ul>
          </nav>
          </div>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/SignIn"><SignIn /></Route>
            <Route path="/SignUp"><SignUp /></Route>
            <Content path="/Content" ></Content>
          </Switch>
      </div>
    );
  }
}

export default inject('Store')(observer(App));