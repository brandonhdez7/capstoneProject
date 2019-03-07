import React, { Component } from 'react';
import Headers from '../navHeaders/Headers'
import Banner from '../banner/Banner'
import Description from '../description/Description'
import MoreDescription from '../description/MoreDescription';
import './home.css';

class Home extends Component{
    render(){
        return(
            <div className="app" >
                {/* <Headers /> */}
                <Banner />
                <Description />
                <MoreDescription />
            </div>
        )
    }
}

export default Home;