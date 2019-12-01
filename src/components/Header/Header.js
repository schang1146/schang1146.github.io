// import dependencies
import React, { Component } from 'react';

// import components
import { Button, ButtonGroup } from 'reactstrap';

// import styling
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <div className='header-content'>
                    <h2>Sammy Chang</h2>
                    <div className='header-nav'>
                        <ButtonGroup>
                            <Button outline color='secondary' size='lg' href='#about'>About</Button>
                            <Button outline color='secondary' size='lg' href='#portfolio'>Portfolio</Button>
                            <Button outline color='secondary' size='lg' href='#contact'>Contact</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
