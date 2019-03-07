import React, { Component } from 'react';
import '../home/Home';
// import Headers from '../navHeaders/Headers'
import AboutBanner from '../banner/AboutBanner'
import Engeneers from '../description/Engeneers';
import './pages.css'

class About extends Component{
    render(){
        return(
            <div className="app">
                <AboutBanner />
                <Engeneers />
            </div>
        )
    }
}
export default About;