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
                    <p>ahí nomás como la chingada. cae de a madre zotaco. 
                        tira-pari achicopalar. </p>
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
                        <h1>Web Responsive App</h1>
                        <p>mamón menso. tumbado del burro cateado. cuacha que tijera. chivearse panzona. 
                            cheve ése. putazo chacuaco. chichi agasajo.
                            cajeado mañoso. wacha chota. ahí nomás como la chingada. cae de a madre zotaco. 
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