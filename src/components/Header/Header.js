// import dependencies
import React, { Component } from 'react';

// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'reactstrap';

// import styling
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div id='header' className='header-wrapper'>
                <div className='header-content'>
                    <h1>Sammy Chang</h1>
                    <hr />
                    <div className='header-nav'>
                        <ButtonGroup>
                            <Button outline color='secondary' size='lg' href='#about'>
                                About
                            </Button>
                            <Button outline color='secondary' size='lg' href='#portfolio'>
                                Portfolio
                            </Button>
                            <Button outline color='secondary' size='lg' href='#contact'>
                                Contact
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className='header-icons'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon' />
                        <FontAwesomeIcon icon={faEnvelope} size='2x' className='icon' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
