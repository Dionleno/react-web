import { combineReducers } from 'redux'
import LoginReducers from '../Components/Login/reducer'

const rootReducers = combineReducers({
    login: LoginReducers
})

export default rootReducers;