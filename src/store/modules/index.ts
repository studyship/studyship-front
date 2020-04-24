import { combineReducers } from 'redux'
import loading from './loading'
import posts from './posts'

const rootReducer = combineReducers({
  loading,
  posts,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
