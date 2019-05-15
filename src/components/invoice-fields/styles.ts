import {Theme} from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';


export const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
            width: '100%',
        },
        table: {
            minWidth: 100,
        },
    });
