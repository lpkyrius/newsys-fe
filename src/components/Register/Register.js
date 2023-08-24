import React from 'react';
import '../Signin/Signin.css';
import {notify} from '../ToastContainer/ToastContainer';
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            cpf: '',
            password: '',
            password2: ''            
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }

    onCpfChange = (event) => {
        this.setState({ cpf: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value})
    }

    onPassword2Change = (event) => {
        this.setState({ password2: event.target.value})
    }

    onSubmitSRegister = ({ onRouteChange }) => {
        fetch('http://localhost:8000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                cpf: this.state.cpf,
                password: this.state.password,
                password2: this.state.password2
            })
        })
            .then(Response => Response.json())
            .then(user => { 
                if (user.id) {
                    notify('success','Por favor, confirme seu cadastro na mensagem enviada para o seu email e faça o login no New SAVIC!');
                    this.props.onRouteChange('signin');
                } else {
                    notify('warning',user.error);
                }
            })
        
    }

    render() {
        return (
            <div className='SignIn-Gen right'>
            <article className="card br3 ba b--black-10 w-100 w-50-m mw6 shadow-5 center">
                <div className='SignIn-inner'>
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0">Faça o seu cadastro no SAVIC</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Nome</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f6" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    onChange={this.onNameChange} 
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f6" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="cpf">CPF</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f6" 
                                    type="text" 
                                    name="cpf"  
                                    id="cpf"
                                    onChange={this.onCpfChange} 
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Senha</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f6" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange} 
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password2">Confirme sua Senha</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 f6" 
                                    type="password" 
                                    name="password2"  
                                    id="password2"
                                    onChange={this.onPassword2Change} 
                                />
                            </div>
                            </fieldset>
                            <div className="">
                            <input
                                onClick={this.onSubmitSRegister} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Avançar" 
                            />
                            </div>
                        </div>
                    </main>        
                </div>
            </article>
            </div>
        );    
    }
}

export default Register;