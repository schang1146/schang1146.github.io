// import dependencies
import React, { Component } from 'react';

// import components
import { Button, Row } from 'reactstrap';
import ProjectsCard from './ProjectsCard/ProjectsCard';

// import styling
import './Projects.scss';

// import data
import PROJECTS_DATA from './dummydata';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            category: "All",
            projectsData: PROJECTS_DATA
        };
    }

    render() {
        return (
            <div id='projects' className='projects-wrapper'>
                <div className='projects-content'>
                    <h2>Projects</h2>
                    <div className='projects-tags'>
                        <Button color='primary' size='sm' onClick={() => this.setState({category: "All"})} active={this.state.category === "All"}>
                            All
                        </Button>
                        <Button color='primary' size='sm' onClick={() => this.setState({category: "Web Dev"})} active={this.state.category === "Web Dev"}>
                            Web Development
                        </Button>
                        <Button color='primary' size='sm' onClick={() => this.setState({category: "Algo"})} active={this.state.category === "Algo"}>
                            Algorithms
                        </Button>
                    </div>
                    <hr />
                    {/* To Do: Add cards to show off projects */}
                    <div className='projects-cards'>
                        <Row>
                            {this.state.projectsData.map(project => {
                                if (this.state.category === "All" || project.cardTags === this.state.category) {
                                    return (
                                    <ProjectsCard key={project.id} {...project} />
                                    )
                                } else {
                                    return undefined
                                }
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
