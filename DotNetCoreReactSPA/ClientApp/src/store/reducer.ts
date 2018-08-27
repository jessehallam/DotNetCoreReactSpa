import counter from './counter/index'
import { combineReducers } from 'redux'

export const defaultState: StoreState = {
    counter: {
        value: 0
    }
}

export default combineReducers({
    counter
})