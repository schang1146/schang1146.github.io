// import dependencies
import React, { Component } from 'react';
import emailjs from 'emailjs-com';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import styling
import './Contact.scss';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            yourName: '',
            yourEmail: '',
            yourMessage: '',
            verifyCallback: false,
        };
    }

    handleSendMsg(e) {
        e.preventDefault();
        if (this.state.yourName !== '' && this.state.yourEmail !== '' && this.state.yourMessage !== '') {
            emailjs
                .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, { from_name: this.state.yourName, reply_to: this.state.yourEmail, message: this.state.yourMessage }, process.env.REACT_APP_EMAILJS_USER_ID)
                .then((res) => {
                    console.log('Email Successful!');
                })
                .catch((err) => {
                    console.error('Email Unsuccessful!');
                });
        }

        this.setState({ yourName: '', yourEmail: '', yourMessage: '' });
    }

    handleTextChange(e) {
        e.preventDefault();
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div id='contact' className='contact-wrapper'>
                <div className='contact-left'>
                    <h2 className='contact-title'>GET IN TOUCH</h2>
                    <form className='contact-form' action='?' method='POST' onSubmit={(e) => this.handleSendMsg(e)}>
                        <span className='contact-form-top'>
                            <input type='text' name='yourName' id='yourName' placeholder='Name' onChange={(e) => this.handleTextChange(e)} value={this.state.yourName} />
                            <input type='email' name='yourEmail' id='yourEmail' placeholder='Email' onChange={(e) => this.handleTextChange(e)} value={this.state.yourEmail} />
                        </span>
                        <span className='contact-form-bottom'>
                            <textarea name='yourMessage' id='yourMessage' placeholder='Message' onChange={(e) => this.handleTextChange(e)} value={this.state.yourMessage} />
                        </span>
                        {/* <div className='g-recaptcha' verifyCallback={this.verifyCallback} data-sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY_V2_CHECKBOX}></div> */}
                        <br />
                        {/* <input type='submit' value='SEND' /> */}
                        <button className='custom-btn' onClick={(e) => this.handleSendMsg(e)}>
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
