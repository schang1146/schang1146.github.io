// import dependencies
import React, { Component } from 'react';

// import styling
import './ProjectsCard.scss';

// import images
import test from '../../../assets/images/trivia-in-tandem/LandingView.png';

class ProjectsCard extends Component {
    render() {
        console.log(this.props);
        return (
            <article className='projects-card-wrapper'>
                <div className='projects-card-info'>
                    <h3 className='projects-card-title'>{this.props.title.toUpperCase()}</h3>
                    {this.props.tags.map((tag) => {
                        return <span className='projects-card-tag'>{tag}</span>;
                    })}
                    <div className='projects-card-description'>{this.props.description}</div>
                    <div className='projects-card-icons'></div>
                </div>
                <div className='projects-card-image'>
                    <img src={test} alt=''></img>
                </div>
            </article>
        );
    }
}

export default ProjectsCard;
