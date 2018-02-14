import React from 'react'

export default props => {
    if(props.disabled){
        return false;
    }else{
        return props.children
    }
}
    
    