import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, Redirect, hashHistory} from 'react-router'
import Login from '../Components/Login'
import Cadastro from '../Components/Cadastro'
import Dashboard from '../Components/Dashboard'
import Custo from '../Components/Custo'

export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={Login}></Route>
        <Route path='/cadastro' component={Cadastro}></Route>
       
        <Route path='/admin' component={Dashboard}></Route>
        <Route path='/admin/cadastro' component={Cadastro}></Route>
        <Route path='/admin/custo/add' component={Custo}></Route>
        <Route path='*' component={Login}></Route>
    </Router>
)