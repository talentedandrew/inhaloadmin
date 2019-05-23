import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) =>
    createStyles({

        root: {
            display: 'flex',
            marginBottom: theme.spacing.unit * 3,
        },
        cards: {
            [theme.breakpoints.down('sm')]: {
                backgroundColor: theme.palette.secondary.main,
            },
            [theme.breakpoints.up('md')]: {
                backgroundColor: theme.palette.primary.main,
            },
            [theme.breakpoints.up('lg')]: {
                // backgroundColor: green[500],
            },
        }
    });
