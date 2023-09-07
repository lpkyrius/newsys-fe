import React from 'react';

const Main = ({ user }) => {
    return (
        <div>
            <br></br>
            <div className='white f3'>
                {`Olá, ${user.name}`}
            </div>
            <br></br>
            <br></br>
            <div className='white f3'>
                Aqui entra o menu principal do sistema e toda a navegação pelas diversas telas.
            </div>
        </div>
    )
}

export default Main;