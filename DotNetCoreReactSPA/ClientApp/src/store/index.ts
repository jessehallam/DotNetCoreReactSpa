import rootReducer, { defaultState } from './reducer'
import { createStore } from 'redux'

export default createStore(
    rootReducer, 
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)