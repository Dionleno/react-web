import React,{Component} from 'react'
  
class Grid extends Component{
    constructor(props){
        super(props)
    }

    toCssToColunm(numbers){
        const colunm = numbers ? numbers.split(' ') : []
        let classes = ''

        if(colunm[0]) classes += `col-xs-${colunm[0]}`
        if(colunm[1]) classes += ` col-sm-${colunm[1]}`
        if(colunm[2]) classes += ` col-md-${colunm[2]}`
        if(colunm[3]) classes += ` col-lg-${colunm[3]}`

        return classes;
    }

    render(){
        const classGrid = this.toCssToColunm(this.props.cols || 12)

        return (
            <div className={classGrid}>
                {this.props.children}
            </div>    
        )
    }
} 
 
export default Grid