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
                    <img src="/Images/car1.png" />
                </div>
                <div className="learnImg">
                    <img src="/Images/images.png" />
                </div>
                <div className="learnImg">
                    <img src="/Images/app-mockup-2.png" />
                </div>
            </div>
            <div className="learnMore">
                <div className="learnText">
                <p>Bote fuchi. popis zorrear. churido el otro lado. plomazo talonear. 
                    birote tracalero. mamado curiosito. bote chimuelo. petateado niguas. 
                    chiqueón arrastrando la cobija. como camote popis. teporocho choteado. 
                    vagaciones cuachalote. despapaye huerco. güey la migra. piocha chapucero. 
                    valemadrista jambar. presumido al tiro. gato volador mayativo. coyote lambiscón. chinga gacho. 
                    rollo lambiscón. grifo pachanga. 
                    charolastra ahí muere. talonear chante. bofeado quemacocos. tracalero fumigado. 
                    poca madre volado. guacarear fayuquero. pingas feliz como una lombriz.
                    </p>
                    <img src="/Images/Raspberry-Pi-3-1-1619x1080.png" />
                </div>
                <div className="diagram">
                    <img src="/Images/Arduino-Robot-Car-HC-05-Bluetooth-Control-Circuit-Schematic.png"/>
                </div>

                <div className="learnText">
                    <img src="/Images/maxresdefault.jpg" />
                    <p>Jale churido. carrilludo rollero. el otro lado yonque. lépero julia. 
                    tambo petateado. diste al clavo agasajo. puñal pingas. alivianar yonque. 
                    cotorreo vieja. cachirul aventado. chulear tambo. aló cacharpa. cagar el palo dos-tres.
                     híjole lisa. chupete mochada. pacha ridículum. fayuca naifa. barajeamela más despacio panzona. 
                     ése hace al loco. tiliche ruco. chivas camotes. gato volador comadrear. chavalo mitote. encuerado enchilado. 
                     conchudo cotorreo. la mera mata guacha. camotes simón. zafado lonche. hasta el gorro ahí nomás.</p>
                </div>
            </div>

            </div>
        </div>
        
        )
    }
}
export default LearnMore;