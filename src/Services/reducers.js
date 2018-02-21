import { combineReducers } from 'redux'
import LoginReducers from '../Components/Login/reducer'
import CustoReducers from '../Components/Custo/reducer'
import CadastroReducers from '../Components/Cadastro/reducer'

const rootReducers = combineReducers({
    login: LoginReducers,
    custo: CustoReducers,
    users: CadastroReducers
})

export default rootReducers;