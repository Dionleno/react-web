const INITIAL_STATE = {
    categoria_lists: [
        {
            id: 1,
            name:'Carro'
        },{
            id: 2,
            name:'Casa'
        },{
            id: 3,
            name:'Mercado'
        },
    ],
    categoria: 2,
    valor: 0,
    nova_categoria: true,
    message: [],
 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){    
        case 'CHANGE_MODE_ADD':
            return {...state, nova_categoria: action.payload}  
        default:
            return state  
    }
}


