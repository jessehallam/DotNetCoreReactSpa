import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as counter from '../store/counter/actions'

interface OwnProps { }
interface StoreProps {
    counter: number
    up: Function
    down: Function
}

class CounterComponent extends React.Component<any> {
    render() {
        return <div>
            Counter: {this.props.counter}
            <button type='button' onClick={this.props.up}>+</button>
            <button type='button' onClick={this.props.down}>-</button>
        </div>
    }
}

const mapPropsToState = (state: StoreState): Partial<StoreProps> => {
    return { counter: state.counter.value }
}

const mapDispatch = (dispatch: Dispatch) => {
    return {
        down: () => dispatch(counter.down()),
        up: () => dispatch(counter.up())
    }
}

export default connect(mapPropsToState, mapDispatch)(CounterComponent)