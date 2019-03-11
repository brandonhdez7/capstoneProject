import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUser, logout } from '../Actions/UserActions';
import ReactDOM from 'react-dom';
import Home from './home/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import LearnMore from './pages/LearnMore';
import ListPosts from '../Containers/ListPosts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAccount from '../Containers/CreateAccount';
import Login from '../Containers/Login';
import LoadingComponent from '../Containers/LoadingComponent';
import AuthenticatedComponent from '../Containers/AuthenticatedComponent';
import PostDetail from '../Containers/PostDetail';
import './home/home.css'


class Main extends Component {
    constructor() {
        super();
        this.state = {
            userLoggedIn: false
        }
    }
    componentDidUpdate(props) {
        console.log(this.props.user)
        let isUserLoggedIn = this.props.user ? true : false;
        if (this.state.userLoggedIn !== isUserLoggedIn) {
            this.setState({
                userLoggedIn: this.props.user ? true : false
        })
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <LoadingComponent >
                <div className="navbar">
                    <div className="logo">
                        <img src="/Images/motherboard-icon-over-white-vector-17873129.png" alt="" />
                        <div className="navs">
                        {this.state.userLoggedIn ? <Link to={"/"}>Home</Link>
                            : null}
                            
    
                            {!this.state.userLoggedIn ? <Link to={"/Home"}>Home</Link>
                            : null}
                            <Link to={"/LearnMore"}>Learn More</Link>
                            <Link to={"/About"}>About</Link>
                            <Link to={"/Contact"}>Contact</Link>
                        </div>
                    </div>
                    <div className="navs">
                        {!this.state.userLoggedIn ? <Link to={"/CreateAccount"}>Sign Up</Link>
                            : null}
                        {!this.state.userLoggedIn ? <Link to={"/Login"}>Login</Link>
                            : null}
                        
{/*                         
                        {this.state.userLoggedIn ? <button className="btn btn-danger" onClick={() => {this.props.logout();}}>Sign out</button>
                            : null} */}
                    </div>
                </div>
                {/* <div className="navbar1">
      <div className="logo">
      <img src="/Images/motherboard-icon-over-white-vector-17873129.png" alt=""/>
          <div className="navs">
              <Link to={"/"}>Home</Link>
              <Link to={"/LearnMore"}>Learn More</Link>
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
          </div>
      </div>
      <div className="navs">
        <div className="navbar">
            <button className="btn btn-danger" onClick={() => {this.props.logout();}}>Sign out</button>
        </div>
      </div>
  </div> */}
                {/* <Switch>
<Route exact path="/CreateAccount" component={CreateAccount}/>
<Route exact path = "/Login" component={Login} />
<Route exact path="/Home" component={Home}/>
<Route exact path = "/About" component={About} />
<Route exact path = "/Contact" component={Contact} />
<Route exact path = "/LearnMore" component={LearnMore} />
<AuthenticatedComponent>
  <Route exact path="/:id" component={PostDetail}/>
  <Route exact path="/" component={ListPosts}/>
</AuthenticatedComponent>
</Switch> */}
            </LoadingComponent>

        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.user}
}

export default connect(mapStateToProps) (Main);