import React, { useState } from 'react';
import '../Signin/Signin.css';
import { notify } from '../ToastContainer/ToastContainer';

function Register(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
        password2: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const onSubmitRegister = () => {

        if (formData.password !== formData.password2) {
            notify(`info`, `Password and Password Confirmation don't match`);
        } else {
            fetch(`${ process.env.REACT_APP_SERVER_ADDRESS }users/register`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    cpf: formData.cpf,
                    password: formData.password,
                    password2: formData.password2,
                }),
            })
                .then((response) => response.json())
                .then((user) => {
                    if (user.id) {
                        notify('success', 'Please, check your email to confirm your register!');
                        props.onRouteChange('signin');
                    } else {
                        notify('info', user.error);
                    }
                });
        };
    }

    return (
        <div className='SignIn-Gen right'>
            <article className="card br3 ba b--black-10 w-100 w-50-m mw6 shadow-5 center">
                <div className='SignIn-inner'>
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw6 ph0 mh0">Register Here To Access the Data</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your complete name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                        type="email"
                                        name="email"
                                        id="email-address"
                                        placeholder="Your email address to confirm your registration"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="cpf">CPF</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                        type="text"
                                        name="cpf"
                                        id="cpf"
                                        placeholder="It's a Brazilian doc. but you can use random numbers"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password2">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100 f6"
                                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                        name="password2"
                                        id="password2"
                                        placeholder="Re enter your password"
                                        onChange={handleChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={onSubmitRegister}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Register"
                                />
                            </div>
                        </div>
                        <br></br>
                        <div className="password-toggle">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={togglePasswordVisibility}
                            />
                            <label className="f6 black db" htmlFor=" showPassword">Show Password</label>
                        </div>                        
                    </main>
                </div>
            </article>
        </div>
    );
}

export default Register;