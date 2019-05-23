import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export const styles = (theme: Theme) =>
    createStyles({
        chartPaper: {
            paddingTop: '1vh',
            paddingBottom: '4vh',
            paddingLeft: '1em',
            paddingRight: '1em'
        }
    })