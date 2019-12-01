// import dependencies
import React, { Component } from 'react';

// import components
import { Button } from 'reactstrap';
import PortfolioCard from './PortfolioCard/PortfolioCard';

// import styling
import './Portfolio.scss';

// import data
import PORTFOLIO_DATA from './dummydata';

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            portfolioData: PORTFOLIO_DATA
        };
    }

    render() {
        return (
            <div id='portfolio' className='portfolio-wrapper'>
                <div className='portfolio-content'>
                    <h2>Portfolio</h2>
                    <div className='portfolio-tags'>
                        <Button color='secondary' size='sm'>
                            Web Development
                        </Button>
                        <Button color='secondary' size='sm'>
                            Algorithms
                        </Button>
                        <Button color='secondary' size='sm'>
                            Trade Show Booths
                        </Button>
                    </div>
                    <hr />
                    {/* To Do: Add cards to show off projects */}
                    <div className='portfolio-cards'>
                        {this.state.portfolioData.map(portfolio => (
                            <PortfolioCard key={portfolio.id} {...portfolio} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
