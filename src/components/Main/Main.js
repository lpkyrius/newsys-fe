import React from 'react';

const Main = ({ user }) => {
    return (
        <div>
            <div className='white f3'>
                {`User connected: ${user.name}`}
            </div>
        </div>
    )
}

export default Main;