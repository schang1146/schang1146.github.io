// import dependencies
import React, { Component } from 'react';

// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

// import styling
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div id='header' className='header-wrapper'>
                <div className='header-content'>
                    <h1>
                        <text className='lighter'>Sammy</text>
                        <br />
                        Chang
                    </h1>
                    <div className='header-nav'>
                        <Button outline color='link' size='lg' href='#about' className='header-links'>
                            About
                        </Button>
                        <Button outline color='link' size='lg' href='#portfolio' className='header-links'>
                            Portfolio
                        </Button>
                        <Button outline color='link' size='lg' href='#contact' className='header-links'>
                            Contact
                        </Button>
                    </div>
                    <div className='header-icons'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon' />
                        <FontAwesomeIcon icon={faEnvelope} size='2x' className='icon' />
                    </div>
                </div>
                <div className='header-images'></div>
            </div>
        );
    }
}

export default Header;
