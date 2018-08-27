import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

type CounterType = ActionType<typeof actions>

export default function (state: CounterState, action: CounterType): CounterState {
    switch (action.type) {
        case 'DOWN':
            return { ...state, value: --state.value }

        case 'UP':
            return { ...state, value: ++state.value }

        default:
            return { ...state }
    }
}