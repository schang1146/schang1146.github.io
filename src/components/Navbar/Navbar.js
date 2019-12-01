// import dependencies
import React, { Component } from 'react';

// import components
import { Button } from 'reactstrap';

// import styling
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <h2> </h2>
                <div className='navbar-links-wrapper'>
                    <Button outline color='link' className='navbar-link'>About</Button>
                    <Button outline color='link' className='navbar-link'>Portfolio</Button>
                    <Button outline color='link' className='navbar-link'>Contact</Button>
                </div>
            </div>
        );
    }
}

export default Navbar;