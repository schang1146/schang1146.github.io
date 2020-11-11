// import dependencies
import React, { Component } from 'react';

// import styling
import './ProjectsCard.scss';

// import images
import h3rra from '../../../assets/images/h3rra.jpg';

class ProjectsCard extends Component {
    render() {
        console.log(this.props);
        return (
            <article className='projects-card-wrapper'>
                <h3 className='projects-card-title'>{this.props.title.toUpperCase()}</h3>
                {this.props.tags.map((tag) => {
                    return <li>{tag}</li>;
                })}
                <div className='projects-card-description'>{this.props.description}</div>
                <div className='projects-card-icons'></div>
            </article>
        );
    }
}

export default ProjectsCard;
