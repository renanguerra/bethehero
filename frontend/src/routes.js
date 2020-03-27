import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Profile from './pages/profile'
import Login from './/pages/login'
import Register from './/pages/register'
import newIncidents from './pages/newincidents'

export default function Routes (){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path='/profile' component={Profile} exact/>
            <Route path='/profile/new' component={newIncidents} exact/>
        </Switch>
        </BrowserRouter>
    )
}