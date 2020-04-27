import { createAsyncAction, createAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { UserState } from './types'

export const SAVE_TOKEN = 'users/SAVE_TOKEN'
export const SAVE_TOKEN_SUCCESS = 'users/SAVE_TOKEN_SUCCESS'
export const SAVE_TOKEN_FAILURE = 'users/SAVE_TOKEN_FAILURE'

export const LOGOUT = 'users/LOGOUT'

export const loadSaveTokenRequestAsync = createAsyncAction(
  SAVE_TOKEN,
  SAVE_TOKEN_SUCCESS,
  SAVE_TOKEN_FAILURE,
)<void, UserState, AxiosError>()

export const deleteToken = createAction(LOGOUT)<string>()
