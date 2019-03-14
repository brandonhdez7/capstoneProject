import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

function MoreDescription(props){
    return (
        <div className="homeDescription">
            <div className="moreDescription">
                <div className="text1">
                    <h1>Web Responsive App</h1>
                    <p>The Roaming Hobo is web-responsive so you can use your PI car on the go.
                        you will still need to ssh to raspberry in your settings. Everything can be done by using
                        the raspberry hotspot.
                    </p>
                </div>
                <div className="phone">
                    <img src="/Images/1757ea3e58b9fd7.png" alt=""/>    
                </div>      
            </div>
       
            <div className="codeDescription">
                <div className="codeImg">
                    <div className="codeBox">
                        
                            
                        <img src="/Images/codeSnapshot.png" alt="" />
                    </div> 
                </div>
                <div className="text1">
                    <p>Setting up your RC car couldn't be more easy with our help.
                         You're able to modified your directionals with our Javascript 
                         code as simple as just copying and pasting. The code provides the ability for you to movie to 
                         any direction you like. Also if you have a pi camera connected to it, we have given you the 
                         code to control it.
                        </p>
                </div>
            </div>
        </div>
    );
}
  
  export default MoreDescription;