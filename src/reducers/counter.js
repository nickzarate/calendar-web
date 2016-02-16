import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'actions/constants'
import createReducer from 'store/createReducer'
import createImmutableReducer  from 'store/createImmutableReducer'

const initialState = {
  value: 0
}

/* A regular reducer */
const counter = createReducer(initialState, {
  [INCREMENT_COUNTER] (state, action) {
    return { value: state.value + 1 }
  },
  [DECREMENT_COUNTER] (state, action) {
    return { value: state.value - 1 }
  }
})

/* An immutable hydrated reducer */
export default createImmutableReducer(initialState, {
  [INCREMENT_COUNTER] (state, action) {
    return state.updateIn(['value'], value => value + 1)
  },
  [DECREMENT_COUNTER] (state, action) {
    return state.updateIn(['value'], value => value - 1)
  }
})

