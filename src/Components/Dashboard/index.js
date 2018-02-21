import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../Templates/Header'
import Grid from '../../Templates/Grid'
export class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
        <div className="container">
            <Header title="Dashboard" hide={false}/>
            <Grid cols="12 6">
               
               <div className="list-group">
                   <a href="#" className="list-group-item active">
                       <h4 className="list-group-item-heading">List group item heading</h4>
                       <p className="list-group-item-text">Content goes here</p>
                   </a>
               </div>

               <div className="list-group">
                   <a href="#" className="list-group-item active">
                       <h4 className="list-group-item-heading">List group item heading</h4>
                       <p className="list-group-item-text">Content goes here</p>
                   </a>
               </div>
             
               
            </Grid>
           
        </div>
        )
    }
}
 
const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
