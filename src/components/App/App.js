// import dependencies
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import styling
import './App.scss';

// import views
import { HomeView } from '../../views';
// import { DevView } from '../../views';
// import { ProjectsView } from '../../views';

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Switch>
                    <Route exact path='/' render={() => <HomeView />} />
                    {/* <Route path='/dev' render={() => <DevView />} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
