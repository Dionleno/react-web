import React, { Component } from 'react'
import IF from '../IF'

export default class Header extends Component{
    constructor(props){
        super(props)
        document.title = this.props.title;
    }

    render(){
        return (
            <IF disabled={this.props.hide}>
                <h1>{this.props.title}</h1>
            </IF>
        )
    }
} 