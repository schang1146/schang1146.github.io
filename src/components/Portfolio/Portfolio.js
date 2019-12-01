// import dependencies
import React, { Component } from 'react';

// import components
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
        }
    };

    render() {
        return (
            <div id='portfolio' className='portfolio-wrapper'>
                <div className='portfolio-content'>
                    <h2>Portfolio</h2>
                    {/* To Do: Add cards to show off projects */}
                    <div className='portfolio-cards'>
                        {this.state.portfolioData.map(portfolio => (
                            <PortfolioCard key={portfolio.id} {...portfolio} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;