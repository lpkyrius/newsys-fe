import React from 'react';
import './Signin.css';
import { notify } from '../ToastContainer/ToastContainer';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            showPassword: false, // Add a state variable for showing/hiding the password
        };
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value });
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    onSubmitSignin = () => {
        fetch(`${ process.env.REACT_APP_SERVER_ADDRESS }users/signin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword,
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                } else {
                    notify('info', user.error);
                }
            });
    }

    render() {
        const { onRouteChange } = this.props;
        const { showPassword } = this.state;

        return (
            <div className="SignIn-Gen right">
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m mw6 shadow-5 center">
                    <div className="SignIn-inner">
                        <main className="pa4 black-80">
                            <div className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className="f3 fw6 ph0 mh0">Log in to continue your journey</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            onChange={this.onEmailChange}
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                        <input
                                            className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                            type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                            name="password"
                                            id="password"
                                            value={this.state.signInPassword}
                                            onChange={this.onPasswordChange}
                                        />
                                    </div>
                                </fieldset>
                                <div className="">
                                    <input
                                        onClick={this.onSubmitSignin}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit"
                                        value="Sign in"
                                    />
                                </div>
                                <div className="lh-copy mt3 pv2">

                                    <p onClick={() => onRouteChange('register')} className="f6 link dim black grow db pointer">Register</p>
                                    <a href={`${ process.env.REACT_APP_SERVER_ADDRESS }users/forgot-password`} className="f6 link dim black grow db" target="_blank" rel="noreferrer noopener">Forgot you password?</a>
                                </div>
                                <div className="password-toggle">
                                    <input
                                        type="checkbox"
                                        id="showPassword"
                                        checked={showPassword}
                                        onChange={this.togglePasswordVisibility}
                                    />
                                    <label className="f6 black db" htmlFor="showPassword">Show Password</label>
                                </div>
                            </div>
                        </main>
                    </div>
                </article>
            </div>
        );
    }
}

export default Signin;