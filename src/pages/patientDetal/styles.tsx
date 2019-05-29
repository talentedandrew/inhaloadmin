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
            overflow:'hidden'
            // flexGrow:1,
            // height:'100%',
            // backgroundColor: 'linear-gradient(to right, #78ffd6, #a8ff78)'
            // width:'100%'
        },
        paperOne: {
            width: 'auto',
            height: '87vh',
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
            height: '43vh',
            borderRadius: '12px',
        },
        paperThree: {
            width: '35em',
            height: '10em',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2vh',
            marginRight: '3vh',
            marginTop: '1em',
            borderRadius: '20px',
        },
        profileBackground: {
            width: '100%',
            height: '55%',
            // background: 'radial-gradient(circle, rgba(203,238,174,1) 0%, rgba(148,187,233,1) 100%)',

        },
        detailDiv: {
            // position: 'absolute',

            // marginTop: '7em',
            // marginLeft: '3em',
            // marginRight: '7em',
        },
        formLabel: {
            fontSize: '30px',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            color: '#0652DD',
            marginTop: '10%',
            // marginLeft: '3em',
            // marginRight: '3em',
            //
            position: 'absolute',
            // bottom:'0',
            // left:'0',
            // right:'0',
            // justifyContent:'center',
            // alignItems:'center',
            // top:'0'
        },
        bigAvatar: {
            // position:'relative',
            // margin: 10,
            width: 150,
            height: 150,
            marginTop: 160,
            justifyContent: 'center',
            alignContent: 'center',
            // justify:'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'

        },
        bioDate: {
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#4b4b4b',
            marginTop: '20px',
            marginBottom: '10px',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'inline',
            marginRight: '10px',
            marginLeft: '10px'

        },
        fontAwesomeIcon: {
            marginRight: '12px',
        },
        bioDateContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginLeft: '3em'

        },
        horizontalLine: {
            // color: '#95a5a6',
            // backgroundColor: '#95a5a6',
            // marginRight: '12px',
            // marginLeft: '12px'
            display: 'block',
            marginTop: '2em',
            marginBottom: '0.5em',
            marginLeft: '20px',
            marginRight: '20px',
            borderStyle: 'inset',
            borderWidth: '1px',
            // 
        },
        profileName: {

        },
        chartPaper: {
            // justify: 'center',
            // alignItems:'stretch',
            // alignContent:'stretch'
            maintainAspectRatio: 'false'
        },
        PaperFour: {
            width: '35em',
            height: '10em',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2vh',
            marginRight: '3vh',
            marginTop: '1em',
            borderRadius: '20px',
        },
        countupContainer: {
            position: 'absolute',
            marginLeft: '1.5em',
            marginTop: '3em',
            paddingTop: '1em'
        },
        countNumber: {
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#0984e3',
            display: 'inline',
            marginLeft: '60px',
            marginBottom: '10px',
            marginTop: '10px'
        },
        countbestFev: {
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#0984e3',
            display: 'inline',
            marginLeft: '160px',
            marginBottom: '10px'
        },
        countupLabel: {
            display: 'block',
            marginTop: '4px',
            color: '#34495e',
            justifyContent: 'center',
            marginLeft: '50px'
        },
        dateContainer: {
            width: '38%',
            height: '100%',
            // backgroundColor: '#00a8ff',
            // backgroundColor: '#8EC5FC',
            // background-color: #349cde;
            // backgroundImage: 'linear-gradient(90deg, #349cde 18%, #349cde 48%, #ffffff 100%)'

            // background- image: linear - gradient(62deg, #8EC5FC 0 %, #E0C3FC 100 %);

            // background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)'

        },
        datePicker: {
            width: '40em',
            height: '60em',
            // paddingLeft: '100px',
            // paddingRight:'20%',
            // paddingTop: '80px',
            // paddingBottom: '10px',
            // fontSize: '17px',
            // fontWeight: 'bold',
            // backgroundColor:'#ffffff',
            color: '#ffffff',
            position: 'absolute',
            borderRadius: ' 12px',
            marginLeft: '5%',
            alignContent: 'center',
            marginTop: '4em',
            justifyContent: 'center'
            // marginRight: '25%',
        },
        paperCalendar: {
            position: 'absolute',
            width: '25em',
            height: '29%',
            marginTop: '4.5em',
            marginLeft: '2em',
            borderRadius: '12px'
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
