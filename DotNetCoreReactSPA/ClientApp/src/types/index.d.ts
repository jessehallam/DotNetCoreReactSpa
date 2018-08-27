interface CounterState {
    value: number
}

interface StoreState {
    counter: CounterState
}

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__()
}