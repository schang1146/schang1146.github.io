import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div class='navbar-wrapper'>
                <h2>Sammy Chang</h2>
                <div class='navbar-links-wrapper'>
                    <button class='navbar-link'>About</button>
                    <button class='navbar-link'>Portfolio</button>
                    <button class='navbar-link'>Contact</button>
                </div>
            </div>
        );
    }
}

export default Navbar;