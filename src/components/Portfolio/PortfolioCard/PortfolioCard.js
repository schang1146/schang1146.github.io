// import dependencies
import React, { Component } from 'react';

// import components
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class PortfolioCard extends Component {
    render () {
        return (
            <Card>
                <CardImg top width='100%' src={this.props.cardImg} alt={this.props.cardTitle} />
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
        )
    }
}

export default PortfolioCard;