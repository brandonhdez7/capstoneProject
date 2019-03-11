import React, { Component } from 'react';
import Banner from '../Components/banner/Banner'
import socket from '../Utility/socketConnection'
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

    checkKeyDown = (event) => {
        console.log(event.keyCode)
        if (event.keyCode === 38){
            console.log('up')
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
                    <div className='cameraFeed'>
                        <img src="http://10.150.41.124:8080/?action=stream"/>
                        </div>
                    <div className="carButtons">
                        <div className="left1">
                                <button className="forward">Up</button>
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