import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'

import Login from './pages/Login/index.login'
import New from './pages/New/index.new'
import Dashboard from './pages/Dashboard/index.dashboard'



export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component = {Login}/>
        <Route path="/dashboard" component = {Dashboard}/>
        <Route path="/new" component = {New}/>
    </Switch>
    
    </BrowserRouter>
  );
}
