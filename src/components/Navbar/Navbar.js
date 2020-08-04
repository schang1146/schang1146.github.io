// import dependencies
import React, { Component } from 'react';

// import components
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// import styling
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <div className='navbar-left'>
                    <a href='https://www.github.com/schang1146/'>
                        <FontAwesomeIcon icon={faGithub} className='icon' size='2x' />
                    </a>
                    <a href='https://www.linkedin.com/in/sammy-chang/'>
                        <FontAwesomeIcon icon={faLinkedin} className='icon' size='2x' />
                    </a>
                    <a href='mailto:sammychang2185@gmail.com'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' size='2x' />
                    </a>
                </div>
                {/* <div className='navbar-center'>
                    <text className='light'>Sammy&nbsp;</text>Chang
                </div> */}
                <div className='navbar-right'>
                    <Button outline color='link' className='navbar-link'>
                        About
                    </Button>
                    <Button outline color='link' className='navbar-link'>
                        Projects
                    </Button>
                    <Button outline color='link' className='navbar-link'>
                        Contact
                    </Button>
                </div>
            </div>
        );
    }
}

export default Navbar;
