// import dependencies
import React, { Component } from 'react';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import styling
import './Contact.scss';

class Contact extends Component {
    sendMsg(e) {
        e.preventDefault();
        console.log('submit');
    }

    render() {
        return (
            <div id='contact' className='contact-wrapper'>
                <div className='contact-left'>
                    <h2 className='contact-title'>GET IN TOUCH</h2>
                    <form className='contact-form' onSubmit={(e) => this.sendMsg(e)}>
                        <span className='contact-form-top'>
                            <input type='text' name='yourName' id='yourName' placeholder='Name' />
                            <input type='email' name='yourEmail' id='yourEmail' placeholder='Email' />
                        </span>
                        <span className='contact-form-bottom'>
                            <textarea name='yourMessage' id='yourMessage' placeholder='Message' />
                        </span>
                        <button className='custom-btn' onClick={(e) => this.sendMsg(e)}>
                            SEND
                        </button>
                    </form>
                </div>
                <div className='contact-right'>
                    <h2 className='contact-title'>FOLLOW</h2>
                    <div className='contact-social-media'>
                        <a className='icon' href='https://www.github.com/schang1146/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} size='lg' />
                        </a>
                        <a className='icon' href='https://www.linkedin.com/in/sammy-chang/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} size='lg' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
