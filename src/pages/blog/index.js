import * as React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../../components';
import { BlogDetailsPage } from '../blogDetail/index-page';
import { BlogPage } from './index-page';

class BlogApp extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRoute path='/blogs/detail' component={BlogDetailsPage} />
                <PrivateRoute path='/blogs/' component={BlogPage} />
            </Switch>
        )
    }
}

export default BlogApp;