import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import List from './containers/list/index.jsx';
import Login from './containers/login/index.jsx';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/list' component={List} />
                <Redirect from='/' exact to='/login' />
            </Switch>
        </div>
    );
}


export default App;
