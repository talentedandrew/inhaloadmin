import { red } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';


export const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        para: {
            color: 'white'
        },
        card: {
            maxWidth: 400,
            background: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
            borderRadius:'10%',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        // tslint:disable-next-line: object-literal-sort-keys
        actions: {
            display: 'flex',
        },
        expand: {
            transform: 'rotate(0deg)',
            // tslint:disable-next-line: object-literal-sort-keys
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        }, paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    });
