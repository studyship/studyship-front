import { combineReducers } from 'redux'
import loading from './loading'
import posts from './posts'
import users from './users'
import account from './account'

const rootReducer = combineReducers({
  account,
  loading,
  posts,
  users,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
