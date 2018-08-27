import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'

import CounterComponent from './components/counter'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <CounterComponent />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept()
}