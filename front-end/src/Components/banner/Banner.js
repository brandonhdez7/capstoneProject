import React from 'react'
import {Link} from 'react-router-dom';
import LearnMore from '../pages/LearnMore'
import { BrowserRouter as Router } from 'react-router-dom';
// import LearnMore from '../pages/LearnMore'
import { login, getUser, googleLogin } from '../../Actions/UserActions';
import { connect } from 'react-redux';

function Banner(props){
    const { googleLogin, LearnMore } = props;
    return (
        <Router>
            <div className="banner">
                <div className="title">
                    <h1>The Roaming Hobo</h1>
                    <p> </p>
                </div>
                <div className="buttons">
                        <button type="button" onClick={googleLogin}> 
                        <span className="fab fa-google"/> Sign in with Google
                        </button>
                        <Link to="/LearnMore"><button type="button" onClick={LearnMore}>Learn More</button></Link>
                </div>
                <div className="bannerDetails">
                    <div className="cars">
                        <img src="/Images/adeept-smart-car-kit-for-arduino-remote-control-car-based-on-nrf24l01-2-4g-wireless--2037-500x500_0.png" alt=""/>
                    </div>
                    <div className="bannerText">
                        <h1>Robotic RC Car App</h1>
                        <p>The Roaming Hobo app gives you the ability to power and control your builded Raspberry pi rc car. 
                         A community of enthusiast are be able to share posts and comments in other to help one another. 
                        </p>
                    </div>

                </div>
            </div>
        </Router>
    );
}
function mapStateToProps(state, ownProps) {
    return { user: state.user };
  }

  
  export default connect(mapStateToProps, { login, getUser, googleLogin, LearnMore})(Banner);