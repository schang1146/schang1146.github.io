// import dependencies
import React, { Component } from 'react';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

// import styling
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div id='header' className='header-wrapper'>
                <div className='header-content'>
                    <h1 className='header-title'>
                        <FontAwesomeIcon icon={faCode} className='icon' />
                        &nbsp;Sammy Chang
                    </h1>
                    <h2 className='header-description'>I'm a Web Developer</h2>
                    <p className='header-textarea'>lorem ipsum...(about)</p>
                </div>
            </div>
        );
    }
}

export default Header;
