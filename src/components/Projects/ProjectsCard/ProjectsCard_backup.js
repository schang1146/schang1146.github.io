// import dependencies
import React, { Component } from 'react';

// import components
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

// import styling
import './ProjectsCard.scss';

class ProjectsCard extends Component {
    render() {
        return (
            <Col sm='4'>
                <Card className='projects-card-wrapper'>
                    {/* <Badge
                        color='danger'
                        className='projects-card-badge'
                        onClick={() => {
                            console.log('To Do: Change filters');
                        }}
                    >
                        {this.props.cardTags}
                    </Badge> */}
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.cardSubtitle}</CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <CardText>
                            <small className='text-muted'>Last updated {this.props.cardUpdated} ago</small>
                        </CardText>
                        <Button outline color='primary'>
                            Go To Project
                        </Button>
                        <Button outline color='secondary'>
                            Github
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default ProjectsCard;
