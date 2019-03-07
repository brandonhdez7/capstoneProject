import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home/Home' 
import About from '../pages/About'; 
import Contact from '../pages/Contact'; 
import LearnMore from '../pages/LearnMore';
import CreateAccount from '../../Containers/CreateAccount';
import Login from '../../Containers/Login';


class Headers extends Component {
    render() {
      return (
        <BrowserRouter>
            <div className="navbar">
                <div className="logo">
                <img src="/Images/motherboard-icon-over-white-vector-17873129.png" alt=""/>
                    <div className="navs">
                        <Link to={"/Home"}>Home</Link>
                        <Link to={"/LearnMore"}>Learn More</Link>
                        <Link to={"/About"}>About</Link>
                        <Link to={"/Contact"}>Contact</Link>
                    </div>
                </div>
                <div className="navs">
                        <Link to={"/CreateAccount"}>Sign Up</Link>
                        <Link to={"/Login"}>Login</Link>
                </div>
            </div>
          <Switch>
            <Route exact path="/CreateAccount" component={CreateAccount}/>
            <Route exact path = "/Login" component={Login} />
            <Route exact path="/Home" component={Home}/>
            <Route exact path = "/About" component={About} />
            <Route exact path = "/Contact" component={Contact} />
            <Route exact path = "/LearnMore" component={LearnMore} />
          </Switch>
    </BrowserRouter>
        );
    }
}
  
export default Headers;