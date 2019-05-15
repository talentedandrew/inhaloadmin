import {Card, CardContent} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import * as React from 'react';
import {styles} from './styles';

class ValidationList extends React.Component<WithStyles<typeof styles>> {

    public render() {
        const {classes} = this.props;

        return (
            <Card>
                <CardContent>
                    <List className={classes.root}>
                        {[0, 1, 2, 3].map(value => (
                            <ListItem key={value} role={undefined} dense={true}>
                                <ListItemText primary={`Line item ${value + 1}`}/>
                                <ListItemSecondaryAction>
                                    <CloseIcon/>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        );
    }
}

export const ValidationListComponent = withStyles(styles)(ValidationList);
