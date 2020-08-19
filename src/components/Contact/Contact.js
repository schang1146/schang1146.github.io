// import dependencies
import React, { Component } from 'react';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import reactstrap components
import { Button } from 'reactstrap';

// import styling
import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <div id='contact' className='contact-wrapper'>
                <div className='contact-left'>
                    <h2 className='contact-title'>GET IN TOUCH</h2>
                    <form className='contact-form'>
                        <span className='contact-form-top'>
                            <input type='text' name='yourName' id='yourName' placeholder='Name' />
                            <input type='email' name='yourEmail' id='yourEmail' placeholder='Email' />
                        </span>
                        <span className='contact-form-bottom'>
                            <input type='textarea' name='yourMessage' id='yourMessage' placeholder='Message' />
                        </span>
                        <Button size='lg'>Send</Button>
                    </form>
                </div>
                <div className='contact-right'>
                    <h2 className='contact-title'>FOLLOW</h2>
                    <div className='contact-social-media'>
                        <a className='icon' href='https://www.github.com/schang1146/'>
                            <FontAwesomeIcon icon={faGithub} className='icon' size='2x' />
                        </a>
                        <a className='icon' href='https://www.linkedin.com/in/sammy-chang/'>
                            <FontAwesomeIcon icon={faLinkedin} className='icon' size='2x' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
