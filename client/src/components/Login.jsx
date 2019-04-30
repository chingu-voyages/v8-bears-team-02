import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Avatar, Button, FormControl, Input, InputLabel, Paper, Typography} from '@material-ui/core';
import Header from './layout/Header';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from "axios";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleLogin = e => {
        e.preventDefault();
        //TODO - validate inputs
        const {
            email,
            password,
        } = this.state;

        axios
            .post('http://localhost:5000/api/user/login', {
                email,
                password,
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });

    }

    render() {
        const {
            username,
            password,
        } = this.state;

        const {
            classes
        } = this.props;
        return(
            <Fragment>
                <Header title="Log In" />
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log in
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleLogin}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.props.classes.submit}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </Fragment>

        )
    }
}

export default withStyles(styles)(Login);