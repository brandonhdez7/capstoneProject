import React, { Component } from 'react';
import './contact.css'
// import Headers from '../navHeaders/Headers'

class Contact extends Component{
    render(){
        return(
            <div className="app">
                <div className='browser'>
                    <div className='browser-bar'>
                        <p>Contact Us</p>
                    </div>
                    <div className='content'>
                    <div className='left'>
                    <div className='map'>
                        <p>Where To Find Us</p>
                        <div className='map-locator'>
                        <div className='tooltip'>
                        <ul>
                            <li>
                                <span className='entypo-location'></span>
                                <span className='selectedLocation'>Atlanta, GA</span>
                            </li>
                            <li>
                                <span className='entypo-mail'></span>
                                <p>brandonhdez7@gmail.com</p>
                                <p>kqvu09@gmail.com</p>
                                <p>blafuente11@gmail.com</p>
                            </li>
                            {/* <li>
                                <span className='entypo-phone'></span>
                                <p>(678) 773-7241</p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            <div className='zoom'></div>
        </div>
        <div className='location-bar'>
            <p>Always up for a coffee</p>
        </div>
    </div>
        <div className='right'>
            <p>Connect</p>
            <div className='social'>
                <p className='social'>
                    <span className='entypo-facebook'></span>
                </p>
                <p className='social'>
                    <span className='entypo-twitter'></span>
                </p>
                <p className='social'>
                    <span className='entypo-linkedin'></span>
                </p>
                <p className='social'>
                    <span className='entypo-gplus'></span>
                </p>
                <p className='social'>
                    <span className='entypo-instagrem'></span>
                </p>
            </div>
        <form>
            <p>Get in Contact</p>
            <input placeholder='Email' type='email' />
            <input placeholder='Subject' type='text' />
            <textarea placeholder='Message' rows='4'></textarea>
            <input placeholder='Send' type='submit' />
        </form>
            <p>other way</p>
            <div className='other'>
                <p>brandonhdez7@gmail.com</p>
                <p>kqvu09@gmai.com</p>
                <p>blafuente11@gmail.com</p>
            </div>
            {/* <p className='other '>(678) 773-7241</p> */}
    </div>
  </div>
</div>
            
</div>
        )
    }
}
export default Contact;