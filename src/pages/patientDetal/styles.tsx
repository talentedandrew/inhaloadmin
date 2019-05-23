import { Theme } from '@material-ui/core/styles/createMuiTheme';
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
            // flexGrow:1,
            // height:'100%',
            backgroundColor: 'linear-gradient(to right, #78ffd6, #a8ff78)'
            // width:'100%'
        },
        paperOne: {
            width: 'auto',
            height: '100vh',
            // position: 'relative',
            // right: '0',
            // top: '0',
            // width: '30%',
            // height: '46.5em',
            // height: '90%',
            // marginTop: '5.2em',
            // marginLeft: '2%',
            // marginRight: '2%',
            // marginBottom: '1em',
            // alignContent: 'center',
            borderRadius: '12px',
        },
        paperTwo: {
            width: 'auto',
            height: '50vh',
            // marginTop:'3%',
            // marginLeft: '1%',
            // // marginRight:'1%',
            // marginBottom: '2%',
            // // paddingTop: '0.1%',
            // // paddingBottom: '1%',
            borderRadius: '12px',
        },
        paperThree: {
            width: 'auto',
            height: '50vh',
            // position: 'relative',
            // width: '60%',
            // height: '45%',

            // // marginTop:'1%',
            // marginLeft: '1%',
            // // marginRight:'1%',
            // // marginBottom: '2%',
            // // paddingTop: '0.1%',
            // // paddingBottom: '1%',
            // borderRadius: '12px',
        },
        profileBackground: {
            width: '100%',
            height: '55%',
            // background: 'rgb(203,238,174)',
            background: 'radial-gradient(circle, rgba(203,238,174,1) 0%, rgba(148,187,233,1) 100%)'

        },
        detailDiv: {
            // position: 'absolute',
            marginTop: '7em',
            marginLeft: '3em',
            marginRight: '7em',
        },
        formLabel: {
            fontSize: '20px',

            // paddingLeft: '',
            // paddingRight: '1em',
            // paddingBottom: '7%',
            // paddingBottom: '7%'
            // marginLeft: '3em',  
            // marginRight: '5em',
            // marginBottom:'2em',
            // marginTop:'2em'
        },
        FontAwesomeIcon: {
            marginRight: '5px',
            paddingRight: '3px',
            paddingBottom: '7px'
        },
        bigAvatar: {
            // position:'relative',
            // margin: 10,
            width: 150,
            height: 150,
            // marginTop: 130,
            // justify:'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'
            
        },
        profileName: {

        },
        chartPaper: {
            // justify: 'center',
            // alignItems:'stretch',
            // alignContent:'stretch'
        },
        // chartComponent: {
        //     marginTop: '1em',
        //     marginBottom: '1em',
        //     marginLeft: '1em',
        //     marginRight: '1em',
        // },
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
