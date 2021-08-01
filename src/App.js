import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Squad from './components/pages/Squad';
import Clan from './components/pages/Clan';
import Subscribe from './components/pages/Subscribe';

function App() {
  return (
    <>
    <Router>
       <Navbar /> 
       <Switch>
         <Route to path='/' exact component={Home} />
         <Route to path='/squad' exact component={Squad} />
         <Route to path='/clan' exact component={Clan} />
         <Route to path='/subscribe' exact component={Subscribe} />
       </Switch> 
    </Router> 
    </> 
  );
}

export default App;
