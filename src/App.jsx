import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import LazyLoad from './lazyLoad';

const Login = (props) => (
    <LazyLoad load={() => import('./containers/login/index.jsx')}>
        {(Login) => <Login {...props} />}
    </LazyLoad>
);

const List = (props) => (
    <LazyLoad load={() => import('./containers/list/index.jsx')}>
        {(List) => <List {...props} />}
    </LazyLoad>
);


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
