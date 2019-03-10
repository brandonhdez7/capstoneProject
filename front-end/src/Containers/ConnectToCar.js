import React, { Component } from 'react';
import Banner from '../Components/banner/Banner'
import socket from '../Utility/socketConnection'


class ConnectToCar extends Component{
    constructor(props){
        super(props);
    }
    
     checkKeyUp = (e) => {
         console.log('bye')
        e = e || window.event;
        if (e.keyCode === '38') {
            // up arrow
            socket.emit('stop')
        }        
        if (e.keyCode === '40') {
            // down arrow
            socket.emit('stop')
        }
        if (e.keyCode === '37') {
            // left arrow
            socket.emit('stop')
        }  
        if (e.keyCode === '39') {
            // right arrow
            socket.emit('stop')
        }    
    }

    checkKeyDown = (e) => {
        console.log(e.keyCode)
        // e = e || window.event;
        if (e.keyCode === '38') {
            console.log('pressed up')
            // up arrow
            
            socket.emit('forward')                
        }
        else if (e.keyCode === '40') {
            // down arrow
            console.log("I've been pressed");
            socket.emit('backward')
        }
        else if (e.keyCode === '37') {
        // left arrow
        socket.emit('left')
        }
        else if (e.keyCode === '39') {
        // right arrow
        socket.emit('right')
        }
}
    componentDidMount(){
        document.addEventListener('keydown', this.checkKeyDown)
        console.log('mount')
    }
    
    componentWillUnmount(){
        document.removeEventListener('keydown', this.checkKeyDown)
        console.log('unmount')
    }

     

    render(){
        
        console.log("I'm mounted");

      
        

        
        return(
                <div className="connectToCarPage">
                 
                        <iframe>
                            <h1>Camera Comes Here</h1>
                        </iframe>
               
                    <div className="carButtons">
                        <div className="left1">

                                <button>Up</button>
                             <div>
                                <button>Left</button>
                                <button>Right</button> 
                            </div> 
                            <button>Down</button>
                        </div>
                        <div className="right1">
                            <button>Forward</button>
                            <div>
                                <button>Left</button>
                                <button>Right</button> 
                            </div> 
                            <button>Backward</button>
                        </div>

                    </div>

                <script src="http://10.150.41.124:8000/socket.io/socket.io.js"></script>

                </div> 
            
        )
    }
}
export default ConnectToCar;