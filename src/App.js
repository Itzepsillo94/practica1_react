import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav';
import Footer from './components/Footer/Footer';
import LoginUser from './containers/LoginUser/LoginUser';
import NewUser from './containers/NewUser/NewUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNav />
        <Switch>
          <Route exact path="/login" component={LoginUser}/> 
          <Route exact path="/new-user" component={NewUser}/> 
        </Switch>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
