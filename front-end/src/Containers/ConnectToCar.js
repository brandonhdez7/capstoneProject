import React, { Component } from 'react';
import Banner from '../Components/banner/Banner'


class ConnectToCar extends Component{
    render(){
        return(    
                <div className="connectToCarPage">
                 
                        <iframe>

                        </iframe>
               
                    <div className="carButtons">
                        <button>Foward</button>
                        <div>
                            <button>Left</button>
                            <button>Right</button> 
                        </div> 
                        <button>Backward</button>
                    </div>


                </div>      
        )
    }
}
export default ConnectToCar;