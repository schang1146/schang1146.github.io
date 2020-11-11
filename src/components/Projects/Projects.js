// import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import components
import ProjectsCard from './ProjectsCard/ProjectsCard';

// import styling
import './Projects.scss';

// import actions
import { getProjects } from '../../actions';

// import dummy data
import PROJECTS_DATA from './dummydata';

const projectCardBackgroundColors = [
    {
        r: 242,
        g: 132,
        b: 158,
        a: 0.8,
    },
];

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            category: 'All',
            projects: PROJECTS_DATA,
        };
    }

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        return (
            <div id='projects' className='projects-wrapper'>
                <div className='projects-content'>
                    <h2 className='projects-description'>PROJECTS</h2>
                    <div className='projects-tags'>
                        <button color='primary' onClick={() => this.setState({ category: 'All' })} active={this.state.category === 'All'}>
                            All
                        </button>
                        <button onClick={() => this.setState({ category: 'Web Dev' })} active={this.state.category === 'Web Dev'}>
                            Web Development
                        </button>
                        <button onClick={() => this.setState({ category: 'Algo' })} active={this.state.category === 'Algo'}>
                            Algorithms
                        </button>
                    </div>
                    {/* <hr /> */}
                    {/* To Do: Add cards to show off projects */}
                    <div className='projects-cards'>
                        {this.state.projects.map((project) => {
                            // if (this.state.category === 'All' || project.cardTags === this.state.category) {
                            return <ProjectsCard key={project.id} {...project} bgColor={projectCardBackgroundColors[0]} />;
                            // } else {
                            //     return undefined;
                            // }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isGettingProjects: state.projectsReducer.isGettingProjects,
    // isDeletingProject: state.projectsReducer.isDeletingProject,
    // isPostingProject: state.projectsReducer.isPostingProject,
    // isPuttingProject: state.projectsReducer.isPuttingProject,
    error: state.projectsReducer.error,
    projects: state.projectsReducer.projects,
});

export default connect(mapStateToProps, { getProjects })(Projects);
