import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './layout/Header';
import {Button,Grid, Paper, TextField, Typography} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
})

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            messageFromServer: '',
            showError: false,
            registerError: false,
            loginError: false,
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleRegister = e => {
        e.preventDefault();
        //TODO - validate inputs
        const {
            username,
            email,
            password,
            confirmPassword,
        } = this.state;

        if(password !== confirmPassword){
            this.setState({
                showError: true,
                registerError: false,
                passwordMismatchError: true,
                loginError: false,
            })
        } else {
            axios
                .post('http://localhost:5000/api/user/register', {
                    name: username,
                    username,
                    email,
                    password,
                    confirmPassword,
                })
                .then(response => {
                    console.log(response);
                    this.setState({
                        messageFromServer: 'user_created',
                        showError: false,
                        loginError: false,
                        passwordMismatchError: false,
                        registerError: false,
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    render(){
        const {
            username,
            email,
            password,
            confirmPassword,
            messageFromServer,
            showError,
            registerError,
            passwordMismatchError,
            loginError,
        } = this.state;

        const {
            classes
        } = this.props;

            return(
                <Fragment>
                    <Header title="User Registration" />
                    <CssBaseline />
                    {messageFromServer === '' && (
                        <form className={classes.layout} onSubmit={this.handleRegister}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>
                                    User Registration
                                </Typography>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="username"
                                            value={username}
                                            label="User Name"
                                            fullWidth
                                            onChange={this.handleChange('username')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="email"
                                            value={email}
                                            label="Email"
                                            fullWidth
                                            onChange={this.handleChange('email')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id='password'
                                            value={password}
                                            label="Password"
                                            fullWidth
                                            onChange={this.handleChange('password')}
                                            type='password'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id='confirmPassword'
                                            value={confirmPassword}
                                            label="Confirm Password"
                                            fullWidth
                                            onChange={this.handleChange('confirmPassword')}
                                            type="password"
                                        />
                                    </Grid>
                                    <Grid item sx={12}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"

                                        >
                                            Register
                                        </Button>
                                    </Grid>
                                    {showError && passwordMismatchError && (
                                        <div>
                                            <p>Password does not match</p>
                                        </div>
                                    )}
                                </Grid>
                            </Paper>
                        </form>
                    )}
                    {messageFromServer === 'user_created' && (
                        <div className={classes.layout}>
                            <Paper className={classes.paper}>
                                <h3>User successfully registered!</h3>
                                <a href='/login'> Login</a>
                            </Paper>
                        </div>
                    )}
                </Fragment>
            )

    }
}

export default withStyles(styles)(Register);