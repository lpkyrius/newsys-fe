import React from 'react';

const Main = ({ user }) => {
    return (
        <div>
            <br></br>
            <div className='white f3'>
                {`Welcome, ${user.name}`}
            </div>
            <br></br>
            <br></br>
            <div className='white f3'>
                <h2>Here comes the main content and options of your system.</h2>
            </div>
        </div>
    )
}

export default Main;