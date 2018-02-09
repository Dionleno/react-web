import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import Login from './Templates/login'
import Cadastro from './Templates/cadastro'

export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={Login}></Route>
        <Route path='/cadastro' component={Cadastro}></Route>
        <Route path='*' component={Login}></Route>
    </Router>
)