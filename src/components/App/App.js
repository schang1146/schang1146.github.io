// import dependencies
import React, { Component } from 'react';

// import styling
import './App.scss';

// import components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Navbar />
                <Header />
                <About />
                <Portfolio />
            </div>
        );
    }
}

export default App;
