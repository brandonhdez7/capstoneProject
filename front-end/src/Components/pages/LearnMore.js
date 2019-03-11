import React, { Component } from 'react';
import '../home/Home';
// import Headers from '../navHeaders/Headers'
import AboutBanner from '../banner/AboutBanner'
import Engeneers from '../description/Engeneers';
import './pages.css'
import Description from '../description/MoreDescription';

class LearnMore extends Component{
    render(){
        return(
            <div className="app">
             <div className="learnMorePage">    
            <div className="learn">
                <div className="learnImg">
                    <h1>Learn More</h1>
                </div>
            </div>
            <div className="learnMore">
                <div className="learnText">
                <p>Use your raspberry pi to control your RC car via The Roaming Hobo hosted wirelessly on your PI.
                     All you need to do is set up your PI to use your wifi as a hotspot then login
                    to the website to control your car like a Wii Remote. 
                    Any car will do but if you are buying one try and get one 
                     with enough space under the bodyshell to fit all your electronics.
                     <br />
                     <br />
                     You're able to control the PiCar from this web interface with the keyboard. You can move the car 
                     and steer with WASD, as well as move the head/camera independently.
                    </p>
                    <img src="/Images/Raspberry-Pi-3-1-1619x1080.png" />
                </div>
                <div className="diagram">
                    <img src="/Images/F0WNLJJIFR692C6.LARGE.jpg"/>
                    <img src="/Images/F1019UWIFR691T9.LARGE.jpg"/>
                </div>

                <div className="learnText">
                    <img src="/Images/maxresdefault.jpg" />
                    <p>Servos are extremely useful in practice. They may be used to operate remote-controlled toy cars, robots, or airplanes. 
                    Servos are also used in industrial applications, robotics, in-line manufacturing, pharmaceutics, and food services.
                    <br />
                    <br />
                    Install the Raspberry Pi Camera module by inserting the cable into the Raspberry Pi. The cable slots into the connector 
                    situated between the Ethernet and HDMI ports, with the silver connectors facing the HDMI port.    
                    </p>
                    
                </div>
            </div>

            </div>
        </div>
        
        )
    }
}
export default LearnMore;