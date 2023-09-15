import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br-2 shadow-2' style={{ height: '80px', width: '130px' }}>
                <div className='Tilt-inner vertical-center center f3 link white pa3 pointer'><span>NewSYS</span></div>
            </Tilt>
        </div>
    );
}

export default Logo;