import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {changeItemUser,saveUser} from './Actions'

import Header from '../../Templates/Header'
import Grid from '../../Templates/Grid'
   

export class Cadastro extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <Header title="Cadastro" hide={true} />
                <div className="center">
                    <Grid cols='12 6' >
                        <form onSubmit={() => this.props.saveUser()}>
                            <legend>Cadastro</legend>

                            <div className="form-group">
                                <label for="">Nome</label>
                                <input type="text" className="form-control" id="" onChange={(ev) => this.props.changeItemUser(ev.target.value, 'name')} placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label for="">Email</label>
                                <input type="text" className="form-control" onChange={(ev) => this.props.changeItemUser(ev.target.value, 'email')} placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <label for="">Senha</label>
                                <input type="text" className="form-control" onChange={(ev) => this.props.changeItemUser(ev.target.value, 'password')} placeholder="Password" />
                            </div>

                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </form>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.users)
const mapDispatchToProps = dispatch => bindActionCreators({changeItemUser,saveUser},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)
