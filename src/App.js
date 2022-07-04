import logo from './logo.svg';
import './App.css';
import Home from "./component/pages/home/home";
import Login from "./component/pages/login/login";
import Profile from "./component/pages/home/profile/profile";
import Register from "./component/pages/register/register";
import AppRegister from "./component/pages/register/register";
import Messenger from "./component/pages/messenger/messenger";

import {BrowserRouter as Router,route,Switch,Redirect} from 'react-router-dom';
import {useContext} from 'react';
import {Authcontext} from './context/Authcontext.js';



function App() {
  const  {user} =useContext(Authcontext);  
  return (
    <div className="App">
     <router>
      <Switch>
        <route exact path="/">
        {user ? <Home/> :<Register/>}
        </route>
        <route path="/login">{user ? <Redirect to="/"/> :<Login/>}</route>

        <route  path="/register">
        {user ? <Redirect to="/"/>:<AppRegister/>}
        </route>
        <route  path="/messenger">
        {user ? <Redirect to="/Messenger"/>:<Messenger/>}
        </route>
        <route  path="/profile/:username">
       <Profile/>
        </route>
      </Switch>
     </router>
         
    </div>
  );
}

export default App;
