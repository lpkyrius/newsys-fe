import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
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
      isSignedIn: false
    }
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
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Logo />
        {   route === 'home' 
          ? <div>
              <p className='f3 link dim white pa3 pointer'>Texto da Home</p>
            </div>
          : (
              route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
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
