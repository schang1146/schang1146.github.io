// import dependencies
import React, { Component } from 'react';

// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
                        <a href='#about' className='header-links'>
                            About
                        </a>
                        <a href='#portfolio' className='header-links'>
                            Portfolio
                        </a>
                        <a href='#contact' className='header-links'>
                            Contact
                        </a>
                    </div>
                    <div className='header-icons'>
                        <a href="https://www.github.com/schang1146/">
                            <FontAwesomeIcon icon={faGithub} size='2x' className='icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/sammy-chang/">
                            <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon' />
                        </a>
                        <a href="mailto:sammychang2185@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size='2x' className='icon' />
                        </a>
                    </div>
                </div>
                <div className='header-images'></div>
            </div>
        );
    }
}

export default Header;
