import toastr from 'react-redux-toastr'
import axios from 'axios'
import consts from '../constants'




export function login(values){
    return authenticate(values, `${consts.APIURL}/login`)
}


export function signup(values){
    return authenticate(values, `${consts.APIURL}/login`)
}


export function authenticate(values , url){
    return dispacth => {
        axios.post(url,values)
            .then(resp => {
                dispacth([
                    {type:"USER_FETCHED", payload: resp.data}
                ])
            })
            .catch(e=>{
                e.response.data.errors.forEach(error => toastr.error('error',error));
            })
    }
}

export function logout(){
    return  {type:"TOKEN_VALIDATED", payload: false}
}


export function validateToken(token){
    return dispacth => {
        if(token){
            axios.post(`${consts.APIURL}/validateToken`,{token})
                .then(resp => {
                    dispacth({type:"TOKEN_VALIDATED", payload: resp.data})
                })
                .catch(e=>{
                    dispacth({type:"TOKEN_VALIDATED", payload: false})
                })

        }else{
            dispacth({type:"TOKEN_VALIDATED", payload: false})
        }
    }
}