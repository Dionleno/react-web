const INITIAL_STATE = {
    login: '',
    password: '',
    message: [],
    titulo:'hello world'
 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){    
        case 'CHANGE_LIST_ITEM':
            return {...state, login: action.payload}  
        default:
            return state  
    }
}


