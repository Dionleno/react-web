import React, { Component } from 'react'
 

export const changeModeCategory = () => {
 
    return (dispatch, getState) => { 
        const { nova_categoria } = getState().custo
        dispatch({type: 'CHANGE_MODE_ADD', payload: !nova_categoria})
    }
     
}

export const saveCusto = () =>{
    
    return (dispatch, getState) => { 
        const custo = getState().custo
        alert(custo.categoria)
     }
}