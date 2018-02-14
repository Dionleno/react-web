import React,{Component} from 'react'
import Header from '../../Templates/Header/index'

import { connect } from 'react-redux'

class Login extends Component{
    render(){
        return (
            <div className="container">
                <Header title="Header" hide={true}/>
                <h1>{this.props.titulo}</h1>
            </div>
        )
    }
} 


const mapStateToProps = state => (state.login)
export default connect(mapStateToProps)(Login)