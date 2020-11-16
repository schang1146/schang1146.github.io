// import dependencies
import React, { Component } from 'react';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// import styling
import './ProjectsCard.scss';

// import images
import test from '../../../assets/images/trivia-in-tandem/TriviaView.png';

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
                    <div className='projects-card-icons'>
                        <a className='icon' href={this.props.github_url} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className='icon' href={this.props.url} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </div>
                </div>
                <div className='projects-card-image'>
                    <img src={test} alt=''></img>
                </div>
            </article>
        );
    }
}

export default ProjectsCard;
