import React, { Component } from 'react';
import Banner from '../Components/banner/Banner'
import socket from '../utility/socketConnection'


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
        }
    }

    checkKeyDown = (event) => {

        if (event.keyCode === 38){
            socket.emit('forward')
        } else if (event.keyCode === 40) {
            socket.emit('backward')
        } else if (event.keyCode === 37){
            socket.emit('left')
        } else if (event.keyCode === 39){
            socket.emit('right')
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
                 
                        <iframe>

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
                            <button>Foward</button>
                            <div>
                                <button>Left</button>
                                <button>Right</button> 
                            </div> 
                            <button>Backward</button>
                        </div>

                    </div>

                    <script src="http://10.150.41.121:8000/socket.io/socket.io.js"></script>
                </div>   
        )
    }
}
export default ConnectToCar;