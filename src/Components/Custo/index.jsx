import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeModeCategory ,saveCusto } from './Actions'
import Header from '../../Templates/Header'
import Grid from '../../Templates/Grid'
import IF from '../../Templates/IF'


export class Custo extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="container">

                <Header title="Cadastro" hide={true} />

                <div className="center">
                    <Grid cols='12 6' >
                        <form onSubmit={this.props.saveCusto} >
                            <legend>Custos</legend>

                            <IF disabled={!this.props.nova_categoria}>
                                <div className="form-group">
                                    <label for="">Categorias</label>
                                    <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                        {this.props.categoria_lists.map((item, index) => {
                                            return <option key={index} value={item.id} selected={this.props.categoria === item.id}>{item.name}</option>
                                        })}
                                    </select>
                                    <button type="button" className="btn btn-info btn-sm" onClick={() => this.props.changeModeCategory()} style={{ 'margin': 20 }}>Nova categoria</button>
                                </div>
                            </IF>

                            <IF disabled={this.props.nova_categoria}>
                                <div>
                                    <div className="form-group">
                                        <label for="">Nova categoria</label>
                                        <input type="text" className="form-control" id="" placeholder="Password" />
                                    </div>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.changeModeCategory()}>Selecionar categoria existente</button>
                                </div>
                            </IF>

                            <div className="form-group">
                                <label for="">Valor</label>
                                <input type="text" className="form-control" id="" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary" >Cadastrar</button>
                        </form>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.custo)
const mapDispatchToProps = dispatch => bindActionCreators({ changeModeCategory,saveCusto }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Custo)
