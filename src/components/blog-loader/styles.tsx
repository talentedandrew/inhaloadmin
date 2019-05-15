import {Theme} from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 240;

export const styles = (theme: Theme) =>
    createStyles({
        appBar: {
            transition: theme.transitions.create(['width', 'margin'], {
                duration: theme.transitions.duration.leavingScreen,
                easing: theme.transitions.easing.sharp,
            }),
            zIndex: theme.zIndex.drawer + 1,
        },
        appBarShift: {
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['width', 'margin'], {
                duration: theme.transitions.duration.enteringScreen,
                easing: theme.transitions.easing.sharp,
            }),
            width: `calc(100% - ${drawerWidth}px)`,
        },
        appBarSpacer: theme.mixins.toolbar,
        chartContainer: {
            marginLeft: -22,
        },
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            padding: theme.spacing.unit * 3,
        },
        drawerPaper: {
            position: 'relative',
            transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.enteringScreen,
                easing: theme.transitions.easing.sharp,
            }),
            whiteSpace: 'nowrap',
            width: drawerWidth,
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.leavingScreen,
                easing: theme.transitions.easing.sharp,
            }),
            width: theme.spacing.unit * 7,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing.unit * 9,
            },
        },
        h5: {
            marginBottom: theme.spacing.unit * 2,
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        root: {
            display: 'flex',
            marginBottom: theme.spacing.unit * 3,
        },
        tableContainer: {
            height: 320,
        },
        title: {
            flexGrow: 1,
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
    });
