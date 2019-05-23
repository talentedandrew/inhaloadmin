import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import { BlogCreatePage, BlogPage, DashboardPage, LoginPage } from './pages';
import { PrivateRoute } from './components';
import { PatientPage } from './pages/patient/index-page';
import PatientApp from './pages/patient';
import BlogApp from './pages/blog/index';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact={true} path='/' component={DashboardPage} />
                    <Route exact={true} path='/login' component={LoginPage} />
                    <PrivateRoute path='/dashboard' component={DashboardPage} />
                    <PrivateRoute path='/blogs' component={BlogApp} />
                    <PrivateRoute path='/patient' component={PatientApp} />
                    <PrivateRoute path='/blogcreate' component={BlogCreatePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
