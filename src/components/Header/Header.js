// import dependencies
import React, { Component } from 'react';

// import styling
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div id='header' className='header-wrapper'>
                <div className='header-content'>
                    <h1>
                        <span className='lighter'>Sammy&nbsp;</span>Chang
                    </h1>
                </div>
            </div>
        );
    }
}

export default Header;
