import React, { Component } from 'react';

// import components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
// import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';

class HomeView extends Component {
    render() {
        return (
            <div className='home-view-wrapper'>
                <Navbar />
                <Header />
                {/* <About /> */}
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default HomeView;
