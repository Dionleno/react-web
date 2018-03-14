import { combineReducers } from 'redux'
import LoginReducers from '../Components/Login/reducer'
import CustoReducers from '../Components/Custo/reducer'
import CadastroReducers from '../Components/Cadastro/reducer'
import Authenticate from '../Services/auth/reducer'

const rootReducers = combineReducers({
    auth: Authenticate,
    login: LoginReducers,
    custo: CustoReducers,
    users: CadastroReducers
})

export default rootReducers;