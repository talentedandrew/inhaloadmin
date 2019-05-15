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

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact={true} path='/' component={DashboardPage} />
                    <Route exact={true} path='/login' component={LoginPage} />
                    <PrivateRoute path='/dashboard' component={DashboardPage} />
                    <PrivateRoute path='/blogs' component={BlogPage} />
                    <PrivateRoute path='/patient' component={PatientPage} />
                    <PrivateRoute path='/blogcreate' component={BlogCreatePage} />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
