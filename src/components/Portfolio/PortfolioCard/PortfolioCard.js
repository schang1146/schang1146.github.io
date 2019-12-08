// import dependencies
import React, { Component } from 'react';

// import components
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

// import styling
import './PortfolioCard.scss';

class PortfolioCard extends Component {
    render() {
        return (
            <Card className='portfolio-card-wrapper'>
                <CardImg top width='100%' src={this.props.cardImg} alt={this.props.cardTitle} />
                <Badge
                    color='danger'
                    className='portfolio-card-badge'
                    onClick={() => {
                        console.log('To Do: Change filters');
                    }}
                >
                    {this.props.cardTags}
                </Badge>
                <CardBody>
                    <CardTitle>{this.props.cardTitle}</CardTitle>
                    <CardSubtitle>{this.props.cardSubtitle}</CardSubtitle>
                    <CardText>{this.props.cardText}</CardText>
                    <CardText>
                        <small className='text-muted'>Last updated {this.props.cardUpdated} ago</small>
                    </CardText>
                    <Button color='primary'>Go To Project</Button>
                </CardBody>
            </Card>
        );
    }
}

export default PortfolioCard;
