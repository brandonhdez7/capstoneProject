import React, { Component } from 'react';
import Banner from '../Components/banner/Banner'
<<<<<<< HEAD
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
=======
import socket from '../utility/socketConnection';
import ReactPlayer from 'react-player'


class ConnectToCar extends Component{

    checkKeyUp = (event) => {
        event = event || window.event
        if (event.keyCode === 38){
            socket.emit('stop')
        } else if (event.keyCode === 40){
            socket.emit('stop')
        } else if (event.keyCode === 37){
            socket.emit('stop')
        } else if (event.keyCode === 39){
            socket.emit('stop')
        } else if (event.keyCode === 68){
            socket.emit('servoStop')
        } else if (event.keyCode === 65){
            socket.emit('servoStop')
        } else if (event.keyCode === 87){
            socket.emit('servoStop')
        } else if (event.keyCode === 83){
            socket.emit('servoStop')
        }
    }
q
    checkKeyDown = (event) => {
        console.log(event.keyCode)
        if (event.keyCode === 38){
            socket.emit('forward')
        } else if (event.keyCode === 40) {
            socket.emit('backward')
        } else if (event.keyCode === 37){
            socket.emit('left')
        } else if (event.keyCode === 39){
            socket.emit('right')
        } else if (event.keyCode === 68){
            socket.emit('servoRight')
        } else if (event.keyCode === 65){
            socket.emit('servoLeft')
        } else if (event.keyCode === 81){
            socket.emit('servoHome')
        } else if (event.keyCode === 87){
            socket.emit('servoUp')
        } else if (event.keyCode === 83){
            socket.emit('servoDown')
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.checkKeyDown)
        document.addEventListener('keyup', this.checkKeyUp)
    }

    componentWillUnmount(){
        document.addEventListener('keydown', this.checkKeyUp)
        document.addEventListener('keyup', this.checkKeyUp)
    }
    
    render(){
        return(  
                <div className="connectToCarPage">
                 
                        {/* <iframe> */}
                            <ReactPlayer url='http://raspberrypi.local:8080/stream_simple.html' playing />
                        {/* </iframe> */}
>>>>>>> master
               
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

<<<<<<< HEAD
                <script src="http://10.150.41.124:8000/socket.io/socket.io.js"></script>

                </div> 
            
=======
                    <script src="http://10.150.41.124:8000/socket.io/socket.io.js"></script>
                </div>   
>>>>>>> master
        )
    }
}
export default ConnectToCar;