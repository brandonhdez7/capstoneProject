import React, { Component } from 'react';
import Banner from '../Components/banner/Banner'
import socket from '../utility/socketConnection'


class ConnectToCar extends Component{
    constructor(){
        super()
        this.state = {
            carUp: {},
            carDown: {},
            carRight: {},
            carLeft: {},
            camUp: {},
            camDown: {},
            camRight: {},
            camLeft: {}
        }
    }

    checkKeyUp = (event) => {
        event = event || window.event
        if (event.keyCode === 38){
            socket.emit('stop')
            this.setState({
                carUp: {}
            })
        } else if (event.keyCode === 40){
            socket.emit('stop')
            this.setState({
                carDown: {}
            })
        } else if (event.keyCode === 37){
            socket.emit('stop')
            this.setState({
                carLeft: {}
            })
        } else if (event.keyCode === 39){
            socket.emit('stop')
            this.setState({
                carRight: {}
            })
        } else if (event.keyCode === 68){
            socket.emit('servoStop')
            this.setState({
                camRight: {}
            })
        } else if (event.keyCode === 65){
            socket.emit('servoStop')
            this.setState({
                camLeft: {}
            })
        } else if (event.keyCode === 87){
            socket.emit('servoStop')
            this.setState({
                camUp: {}
            })
        } else if (event.keyCode === 83){
            socket.emit('servoStop')
            this.setState({
                camDown: {}
            })
        }
    }

    checkKeyDown = (event) => {
        console.log(event.keyCode)
        if (event.keyCode === 38){
            socket.emit('forward')
            this.setState({
                carUp: {
                    boxShadow: 'inset 0 0 10px 8px rgb(0, 172, 159)',
                }
            })
        } else if (event.keyCode === 40) {
            socket.emit('backward')
            this.setState({
                carDown: {
                    boxShadow: 'inset 0 0 10px 8px rgb(46, 109, 180)',
                }
            })
        } else if (event.keyCode === 37){
            socket.emit('left')
            this.setState({
                carLeft: {
                    boxShadow: 'inset 0 0 10px 8px rgb(233, 119, 153)',
                }
            })
        } else if (event.keyCode === 39){
            socket.emit('right')
            this.setState({
                carRight: {
                    boxShadow: 'inset 0 0 10px 8px rgb(223, 0, 36)',
                }
            })
        } else if (event.keyCode === 68){
            socket.emit('servoRight')
            this.setState({
                camRight: {
                    boxShadow: 'inset 0 0 10px 10px blue',
                }
            })
        } else if (event.keyCode === 65){
            socket.emit('servoLeft')
            this.setState({
                camLeft: {
                    boxShadow: 'inset 0 0 10px 10px blue',
                }
            })
        } else if (event.keyCode === 81){
            socket.emit('servoHome')
        } else if (event.keyCode === 87){
            socket.emit('servoUp')
            this.setState({
                camUp: {
                    boxShadow: 'inset 0 0 10px 10px blue',
                }
            })
        } else if (event.keyCode === 83){
            socket.emit('servoDown')
            this.setState({
                camDown: {
                    boxShadow: 'inset 0 0 10px 10px blue',
                }
            })
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
                    {/* <div className="ps4Controller">
                        <img src="/Images/ps4_controller.png" />
                    </div> */}
                    <div className='cameraFeed'>
                        <img src="http://127.0.0.1:8080/?action=stream"/>
                    </div>
                    <div className="carButtons">
                        <div className="left1">
                            <i style={this.state.camUp} className="carButton1 fas fa-chevron-circle-up fa-3x"></i>
                             <div>
                                <i style={this.state.camLeft} className="carButton1 left-arrow fas fa-chevron-circle-left fa-3x"></i>
                                <i style={this.state.camRight} className="carButton1 right-arrow fas fa-chevron-circle-right fa-3x"></i>
                            </div> 
                            <i style={this.state.camDown} className="carButton1 fas fa-chevron-circle-down fa-3x"></i>
                        </div>
                        <div className="right1">
                            <i style={this.state.carUp} className="carButton1 far fa-arrow-alt-circle-up fa-3x"></i>
                            <div>
                                <i style={this.state.carLeft}  className="carButton1 left-arrow far fa-arrow-alt-circle-left fa-3x"></i>
                                <i style={this.state.carRight} className="carButton1 right-arrow far fa-arrow-alt-circle-right fa-3x"></i>
                            </div> 
                            <i style={this.state.carDown} className="carButton1 far fa-arrow-alt-circle-down fa-3x"></i>
                        </div>

                    </div>
                    <script src="http://127.0.0.1:8000/socket.io/socket.io.js"></script>
                </div>   
        )
    }
}
export default ConnectToCar;