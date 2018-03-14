const _userkey = "user_key"
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(_userkey)), 
    validToken: false,
 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){    
        case 'TOKEN_VALIDATED':
            if(action.payload){
                return {...state, validToken: true}
            }else{
                localStorage.removeItem(_userkey);

                return {...state, user:null, validToken: false}
            }

        case 'USER_FETCHED':
            localStorage.setItem(_userkey,JSON.stringify(action.payload));
            return {...state, user: action.payload, validToken: true}  
        default:
            return state  
    }
}


