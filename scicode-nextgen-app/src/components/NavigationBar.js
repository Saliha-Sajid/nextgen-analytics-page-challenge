import React, { Component } from 'react';
import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.png';

class NavigationBar extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="floatingNavigation">
                    <h3>ACCOUNT</h3>
                </div>
                <div className="floatingNavigation">
                    <h3>CHARTS</h3>
                </div>
                <div className="floatingNavigation">
                    <h3>HELP</h3>
                </div>
                <div>
                    <div className="rectangle"><img src={avatar} className="avatar" alt="avatar" /></div>
                </div>
            </div>

        );
    }
}

export default NavigationBar;