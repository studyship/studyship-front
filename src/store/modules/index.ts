import { combineReducers } from 'redux'
import loading from './loading'
import posts from './posts'
import users from './users'

const rootReducer = combineReducers({
  loading,
  posts,
  users,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
