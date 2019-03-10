import React, { Component } from 'react';


class ConnectToCar extends Component{
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


                </div>      
        )
    }
}
export default ConnectToCar;