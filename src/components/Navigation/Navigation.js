import React, { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import user from '../../img/menu/user.png';
import edit from '../../img/menu/edit.png';
import inbox from '../../img/menu/envelope.png';
import settings from '../../img/menu/settings.png';
import help from '../../img/menu/question.png';
import logout from '../../img/menu/log-out.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (isSignedIn && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [isSignedIn]);

    return (
        <div>
            {isSignedIn ? (
                <div>
                    {/* <nav className='NavBar' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <p onClick={() => onRouteChange('signout')} className='f4 link dim white underline pa3 pointer'>Sair</p>
                    </nav> */}
                    <div className='menu-container' ref={menuRef}>
                        <div className='menu-trigger' onClick={() => setOpen(!open)}>
                            <img src={user} alt="" />
                        </div>
                        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                            <h3>NewSAVIC<br /><span>RCC Brasil</span></h3>
                            <ul>
                                <DropdownItem img={user} text={"Perfil"} />
                                <DropdownItem img={edit} text={"Editar Perfil"} />
                                <DropdownItem img={inbox} text={"Mensagens"} />
                                <DropdownItem img={settings} text={"Configurações"} />
                                <DropdownItem img={help} text={"Ajuda"} />
                                <DropdownItem img={logout} text={"Sair"} onRouteChange={onRouteChange} />
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signin')} className='f4 link dim white underline pa3 pointer'>Entrar</p>
                    <p onClick={() => onRouteChange('register')} className='f4 link dim white underline pa3 pointer'>Registrar-se</p>
                </nav>
            )}
        </div>
    );
};

function DropdownItem(props) {
    return (
        <li className='dropdownItem dim pa3 pointer' onClick={() => {
            if (props.text === "Sair") {
                props.onRouteChange('signout');
            }
        }}>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
        </li>
    );
}

export default Navigation;
