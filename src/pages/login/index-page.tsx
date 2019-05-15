import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { AuthenticationService } from '../../services';
import { withRoot } from '../../withRoot';
import { styles } from './styles';

interface IState {
    redirectToReferrer: string;

    [key: string]: any; // or the type of your input
}

interface ILoginPageProps {
    match: any;
    location: any;
    history: any;
    staticContext: any;
    state?: IState;
}

class LoginPageIndex extends React.Component<ILoginPageProps & RouteComponentProps<any> & WithStyles<typeof styles>> {
    public state = {
        email: '',
        password: '',
        redirectToReferrer: false,
    };

    private authenticationService = new AuthenticationService();

    constructor(props: any) {
        super(props);
    }

    public render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <main className={this.props.classes.main}>
                <CssBaseline />
                <Paper className={this.props.classes.paper}>
                    <Avatar className={this.props.classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={this.props.classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required={true} fullWidth={true}>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input onChange={this.handleChange} id="email" name="email" autoComplete="email"
                                autoFocus={true} />
                        </FormControl>
                        <FormControl margin="normal" required={true} fullWidth={true}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input onChange={this.handleChange} name="password" type="password" id="password"
                                autoComplete="current-password" />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth={true}
                            variant="contained"
                            color="primary"
                            className={this.props.classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.authenticationService.login(this.state).then((authenticated: any) => {
            if (authenticated.redirectToReferrer) {
                this.setState({ redirectToReferrer: true });
            }    
        })
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
}

export const LoginPage = withRouter<any>(withRoot(withStyles(styles)(LoginPageIndex)));
