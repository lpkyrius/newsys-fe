import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import './App.css';
import Register from "./components/Register/Register";

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
      route: 'signin'
    }
  }
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state; 
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Logo />
        {   route === 'home' 
          ? <div>
              
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
