import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from  'axios'
import {bindActionCreators } from 'redux'

import Dashboard from './Components/Dashboard'
import Login from './Components/Login'

import {validateToken} from './Services/auth/Actions'

export class AuthOrApp extends Component {
  constructor(props){
      super(props);
  }

  componentWillMount(){
      if(this.props.auth.user){
          this.props.validateToken(this.props.auth.user.token)
      }
  }
  render() {

    const {user , validToken} = this.props.auth

        if(user && validToken){

            axios.defaults.headers.common['authorization'] = user.token;
            return <Dashboard>{this.props.children}</Dashboard>
        }else if(!user && !validToken){

            return <Login />
        }else{

            return false
        }
  }
}

const mapStateToProps = (state) => (state)
const mapDispatchToProps = dispacth => bindActionCreators({validateToken},dispacth)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)
