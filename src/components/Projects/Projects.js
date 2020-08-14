// import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import reactstrap components
import { Row } from 'reactstrap';

// import components
import ProjectsCard from './ProjectsCard/ProjectsCard';

// import styling
import './Projects.scss';

// import actions
import { getProjects } from '../../actions';

// import dummy data
import PROJECTS_DATA from './dummydata';

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
                    <h2 className='projects-description'>Projects</h2>
                    {/* <div className='projects-tags'>
                        <Button color='primary' size='sm' onClick={() => this.setState({ category: 'All' })} active={this.state.category === 'All'}>
                            All
                        </Button>
                        <Button color='primary' size='sm' onClick={() => this.setState({ category: 'Web Dev' })} active={this.state.category === 'Web Dev'}>
                            Web Development
                        </Button>
                        <Button color='primary' size='sm' onClick={() => this.setState({ category: 'Algo' })} active={this.state.category === 'Algo'}>
                            Algorithms
                        </Button>
                    </div> */}
                    <hr />
                    {/* To Do: Add cards to show off projects */}
                    <div className='projects-cards'>
                        <Row>
                            {this.props.projects.map((project) => {
                                if (this.state.category === 'All' || project.cardTags === this.state.category) {
                                    return <ProjectsCard key={project.id} {...project} />;
                                } else {
                                    return undefined;
                                }
                            })}
                        </Row>
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
