// import dependencies
import React, { Component } from 'react';

// import styling
import './App.scss';

// import components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar />
                <Header />
            </div>
        );
    }
}

export default App;
