import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type UserState = {
  isLoggedIn: boolean
}

export type UserAction = ActionType<typeof actions>
