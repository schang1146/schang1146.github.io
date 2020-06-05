// import dependencies
import React, { Component } from 'react';

// import styling
import './App.scss';

// import components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
// import About from '../About/About';
import Projects from '../Projects/Projects';

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Navbar />
                <Header />
                {/* <About /> */}
                <Projects />
            </div>
        );
    }
}

export default App;
