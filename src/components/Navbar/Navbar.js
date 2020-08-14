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
                {/* <div className='navbar-left'>
                    <p>&lt;/&gt; Sammy Chang</p>
                </div> */}
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
