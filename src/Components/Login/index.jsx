import React,{Component} from 'react'
import Header from '../../Templates/Header/index'
import Grid from '../../Templates/Grid'
import { connect } from 'react-redux'

class Login extends Component{
    render(){
        return (
            <div className="container">
             <Header title="Header" hide={true}/>

             <Grid cols='12 6' >
                <form action="" method="POST" role="form">
                    <legend>Form title</legend>
                
                    <div className="form-group">
                        <label for="">Nome</label>
                        <input type="text" className="form-control" id="" placeholder="Input field" />
                    </div>
                
                    <div className="form-group">
                        <label for="">Email</label>
                        <input type="text" className="form-control" id="" placeholder="Input field" />
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
              </Grid>  
            </div>
        )
    }
} 


const mapStateToProps = state => (state.login)
export default connect(mapStateToProps)(Login)