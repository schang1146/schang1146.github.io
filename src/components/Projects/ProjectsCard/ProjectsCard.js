// import dependencies
import React, { Component } from 'react';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// import styling
import './ProjectsCard.scss';

class ProjectsCard extends Component {
    constructor() {
        super();

        this.state = {
            imageId: 0,
        };
    }

    nextImage(e) {
        e.preventDefault();
        if (this.state.imageId === this.props.image_url.length - 1) {
            this.setState({ imageId: 0 });
        } else {
            this.setState({
                imageId: this.state.imageId + 1,
            });
        }
    }

    prevImage(e) {
        e.preventDefault();
        if (this.state.imageId === 0) {
            this.setState({ imageId: this.props.image_url.length - 1 });
        } else {
            this.setState({
                imageId: this.state.imageId - 1,
            });
        }
    }

    render() {
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
                    <button onClick={(e) => this.prevImage(e)}>{'<'}</button>
                    <img src={this.props.image_url[this.state.imageId]} alt=''></img>
                    <button onClick={(e) => this.nextImage(e)}>{'>'}</button>
                </div>
            </article>
        );
    }
}

export default ProjectsCard;
