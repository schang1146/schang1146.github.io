// import dependencies
import React, { Component } from 'react';

// import components
// import { Button } from 'reactstrap';

// import styling
import './Navbar.scss';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    toggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className='navbar-wrapper'>
                {/* <div className='navbar-left'>
                    <p>&lt;/&gt; Sammy Chang</p>
                </div> */}
                {/* <div className='navbar-center'>
                    <text className='light'>Sammy&nbsp;</text>Chang
                </div> */}
                {/* <div className='navbar-right'>
                    <Button outline color='link' className='navbar-link'>
                        About
                    </Button>
                    <Button outline color='link' className='navbar-link'>
                        Projects
                    </Button>
                    <Button outline color='link' className='navbar-link'>
                        Contact
                    </Button>
                </div> */}
                <div className={this.state.open ? 'menu-btn open' : 'menu-btn'} onClick={() => this.toggle()}>
                    <div className='menu-btn__burger' />
                </div>
            </div>
        );
    }
}

export default Navbar;
