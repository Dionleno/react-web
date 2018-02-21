import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware , createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './Services/reducers'
import App from './Services/routes'

const store = applyMiddleware(thunk, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
,document.getElementById('app'))

