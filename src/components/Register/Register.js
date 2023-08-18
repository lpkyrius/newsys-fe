import React from 'react';
import '../Signin/Signin.css';

const Register = ({ onRouteChange }) => {
    return (
        <div className='SignIn-Gen right'>
        <article className="card br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <div className='SignIn-inner'>
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Entrar no SAVIC</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Senha</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input
                            onClick={() => onRouteChange('home')} 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Avançar" 
                        />
                        </div>
                        <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db">Registrar-se</a>
                        <a href="#0" className="f6 link dim black db">Esqueceu a senha?</a>
                        </div>
                    </form>
                </main>        
            </div>
        </article>
        </div>
    );
}

export default Register;