import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 '>
            <Tilt className='Tilt br-2 shadow-2' style={{ height: '80px', width: '160px' }}>
                <div className='Tilt-inner' class="vertical-center center"><span>RCC</span>BRASIL</div>
            </Tilt>
        </div>
    );
}

export default Logo;