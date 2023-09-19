import React from 'react';
// import './Profile.css';
// import {notify} from '../ToastContainer/ToastContainer';
// import { Input, Page, setOptions, localePtPT } from '@mobiscroll/react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // signInEmail: '',
            // signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        // this.setState({ signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        // this.setState({ signInPassword: event.target.value})
    }

    onSubmitSignin = () => {
        // fetch('http://localhost:8000/users/signin', {
        // fetch('users/signin', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         email: this.state.signInEmail,
        //         password: this.state.signInPassword

        //     })
        // })
        //     .then(Response => Response.json())
        //     .then(user => {
        //         if (user.id) {
        //             this.props.loadUser(user);
        //             this.props.onRouteChange('home');
        //         } else {
        //             notify('info',user.error);
        //         }
        //     })
    }

    render() {
        // const { onRouteChange } = this.props;
        return (
            <div className='SignIn-Gen right'>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m mw6 shadow-5 center">
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <input label="Email" inputStyle="box" labelStyle="floating" placeholder="Enter your email address" />
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <input label="Password" inputStyle="box" labelStyle="floating" placeholder="Set a password" passwordToggle="true" />
                    </div>
                    <div className="mbsc-col-12 mbsc-col-lg-6">
                        <input label="Address" inputStyle="box" labelStyle="floating" placeholder="What is your address?" />
                    </div>
                </div>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <input label="Town" inputStyle="box" labelStyle="floating" placeholder="Enter your town" />
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <input label="State" inputStyle="box" labelStyle="floating" placeholder="Select your state" />
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <input label="Zip" inputStyle="box" labelStyle="floating" placeholder="What is your zip code" />
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <input label="Country" inputStyle="box" labelStyle="floating" placeholder="Select your country" />
                    </div>
                </div>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                        <div className="mbsc-button-group-block">
                            <input
                                    onClick={this.onSubmitSignin} 
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Entrar" 
                                    color="success"
                            />
                        </div>
                    </div>
                </div>
            </article>
            </div>
        );
    }
}

export default Profile;