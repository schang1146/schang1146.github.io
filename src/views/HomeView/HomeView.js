import React, { Component } from 'react';

// import components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
// import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

class HomeView extends Component {
    render() {
        return (
            <div className='home-view-wrapper'>
                {/* <Navbar /> */}
                <Header />
                {/* <About /> */}
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default HomeView;
