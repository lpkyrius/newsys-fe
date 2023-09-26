import React from 'react';

const IntroText = () => {

    return (
        <div className="MainText lineUp" data-scrollax-parent="true">
            <span className="f4 link white">Welcome</span>
            <h1 className="f1 link white">Information is power only if you can access & take action with it</h1>
            <h6 className="f5 link white">Log in or Register to access your data</h6>
            <br></br>
            <a href={`${ process.env.REACT_APP_SERVER_ADDRESS }api-docs`} className="f6 link white grow db" target="_blank" rel="noreferrer noopener">APIs Documentation</a>
        </div>
    );
}

export default IntroText;