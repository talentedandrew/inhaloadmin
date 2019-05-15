import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { PrivateRoute } from '../../components';
import { PatientPage } from '../../pages/patient/index-page';
import { DashboardPage } from '../dashboard/index-page';
import { PatientDetailPage } from '../patientDetal/index-page';

class PatientApp extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRoute path='/patient/detail' component={PatientDetailPage} />
                <PrivateRoute path='/patient/' component={PatientPage} />
            </Switch>
        );
    }
}

export default PatientApp;
