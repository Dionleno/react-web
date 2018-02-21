import React from 'react'
import Header from '../../Templates/Header'
import Grid from '../../Templates/Grid'

export default props => (
    <div className="container">
        <Header title="Cadastro" hide={true} />
        <div className="center">
        <Grid cols='12 6' >
                <form action="" method="POST" role="form">
                    <legend>Cadastro</legend>
                
                    <div className="form-group">
                        <label for="">Nome</label>
                        <input type="text" className="form-control" id="" placeholder="Email" />
                    </div>
                
                    <div className="form-group">
                        <label for="">Email</label>
                        <input type="text" className="form-control" id="" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label for="">Senha</label>
                        <input type="text" className="form-control" id="" placeholder="Password" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form> 
              </Grid>  
              </div>
    </div>
)
