import React, { Component } from 'react';

// import components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';

class ProjectsView extends Component {
    render() {
        return (
            <div className='projects-view-wrapper'>
                <Navbar />
                <Header />
                <Projects />
            </div>
        );
    }
}

export default ProjectsView;
