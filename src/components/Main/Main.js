import React from 'react';

const Main = ({ user }) => {
    return (
        <div>
            <div className='white f3'>
                {`Olá, ${user.name}`}
            </div>
        </div>
    )
}

export default Main;