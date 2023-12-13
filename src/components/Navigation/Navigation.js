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
                    <div className='menu-container' ref={menuRef}>
                        <div className='menu-trigger' onClick={() => setOpen(!open)}>
                            <img src={user} alt="" />
                        </div>
                        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                            <h3>NewSYS<br /><span>YourCompany</span></h3>
                            <ul>
                                <DropdownItem img={user} text={"Profile"} />
                                <DropdownItem img={edit} text={"Edit Profile"} />
                                <DropdownItem img={inbox} text={"Messages"} />
                                <DropdownItem img={settings} text={"Settings"} />
                                <DropdownItem img={help} text={"Help"} />
                                <DropdownItem img={logout} text={"Log Out"} onRouteChange={onRouteChange} />
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signin')} className='f4 link dim white underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f4 link dim white underline pa3 pointer'>Register</p>
                </nav>
            )}
        </div>
    );
};

function DropdownItem(props) {
    return (
        <li className='dropdownItem dim pa3 pointer' onClick={() => {
            if (props.text === "Log Out") {
                props.onRouteChange('signout');
            }
        }}>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
        </li>
    );
}

export default Navigation;
