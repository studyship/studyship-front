import { createReducer } from 'typesafe-actions'
import { START, FINISH } from './actions'

const initialState = {}

const loadingReducer = createReducer<any, any>(initialState, {
  [START]: (state, action) => {
    return {
      ...state,
      [action.payload]: true,
    }
  },
  [FINISH]: (state, action) => {
    return {
      ...state,
      [action.payload]: false,
    }
  },
})

export default loadingReducer
