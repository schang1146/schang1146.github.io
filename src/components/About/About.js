// import dependencies
import React, { Component } from 'react';

// import styling
import './About.scss';

class About extends Component {
    render() {
        return (
            <div id='about' className='about-wrapper'>
                <div className='about-content'>
                    <div className='about-bottom'>
                        <img src='https://i.stack.imgur.com/aJCJf.png' alt='' className='about-left' />
                        <p className='about-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia dictum luctus. In ultrices risus ut tortor convallis lobortis. Ut in sollicitudin sapien. Morbi suscipit, sem ac placerat laoreet, felis arcu accumsan nisl, a fermentum ex metus sit amet eros. Curabitur non efficitur nunc, et accumsan erat. Sed felis purus, vestibulum eget arcu at, pellentesque varius justo. Donec condimentum mauris et mauris tristique, in fermentum enim facilisis. Fusce id quam elementum, imperdiet justo ut, luctus purus. Praesent finibus in sem vel lobortis. Integer quis magna lobortis, dignissim eros id, placerat diam. Cras ac vulputate urna. Aliquam erat volutpat. Suspendisse semper eros eu ipsum convallis, ac placerat libero dignissim.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
