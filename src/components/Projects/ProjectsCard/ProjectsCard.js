// import dependencies
import React, { Component } from 'react';

// import components
import { Col } from 'reactstrap';

// import styling
import './ProjectsCard.scss';

class ProjectsCard extends Component {
    render() {
        return (
            <Col sm='4'>
                <article className='projects-card-wrapper'>
                    <h3 className='projects-card-title'>{this.props.title.toUpperCase()}</h3>
                </article>
            </Col>
        );
    }
}

export default ProjectsCard;
