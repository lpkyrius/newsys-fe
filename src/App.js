import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Logo from './components/Logo/Logo';
import IntroText from './components/IntroText/IntroText';
import {ToastContainer} from './components/ToastContainer/ToastContainer';
import './App.css';


const initialState = {
  input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: '' 
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '', 
        created_at: new Date(),
        updated_at: new Date(),
        verified: false
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email, 
      created_at: data.created_at,
      updated_at: data.updated_at,
      verified: data.verified
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state; 
    return (
      <div className='App'>
        <div className="SideBySideContainerTop">
          <Logo />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        </div>
        <div className="container">
          {route === 'home' ? (
            <div>
              <Main user={this.state.user} />
            </div>
          ) : (
            <div className="SideBySideContainer">
              <IntroText />
              <div>
                {route === 'signin' || route === 'signout' ? (
                  <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                ) : (
                  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                )}
              </div>
            </div>
          )}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }  
}


//   /////////////
// function App() {
//   return (
//     <div className="App">
//       <Navigation />
//       <Signin />
//       <Logo />
//       {/* {
//       <Login />} */}
//     </div>
//   );
// }

export default App;
