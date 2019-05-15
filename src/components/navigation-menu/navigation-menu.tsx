import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';

class NavigationMenu extends React.Component<WithStyles<typeof styles>> {

    public state = {
        group: 'a'
    };

    public routes = [
        { path: '/', title: 'Dashboard', icon: () => <DashboardIcon />, group: 'D' },
        { path: '/blogs/', title: 'Blogs', icon: () => <FolderOpenIcon />, group: 'Blog' },
        { path: '/blogcreate/', title: 'Blog Create', icon: () => <CloudUploadIcon />, group: 'Blog' },
        { path: '/patient/', title: 'Patients', icon: () => <CloudUploadIcon />, },
    ]

    public render() {
        const { classes } = this.props;

        return (
            <div>
                {this.routes.map((route, index) => {
                    return (
                        <NavLink
                            key={index}
                            className={classes.link}
                            exact={true}
                            to={route.path}>
                            <ListItem button={true}>
                                <ListItemIcon>
                                    {route.icon()}
                                </ListItemIcon>
                                <ListItemText primary={route.title} />
                            </ListItem>
                        </NavLink>
                    );
                })}
            </div>
        )
    }
}

export const NavigationMenuComponent = withStyles(styles)(NavigationMenu);
