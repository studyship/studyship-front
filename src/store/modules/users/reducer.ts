import { createReducer } from 'typesafe-actions'
import { UserState, UserAction } from './types'
import { SAVE_TOKEN_SUCCESS, LOGOUT } from './actions'
const initialState: UserState = {
  isLoggedIn: false,
}

const usersReducer = createReducer<UserState, UserAction>(initialState, {
  [SAVE_TOKEN_SUCCESS]: (state, action) => {
    return {
      isLoggedIn: true,
    }
  },
  [LOGOUT]: (state, action) => {
    return {
      isLoggedIn: false,
    }
  },
})

export default usersReducer
