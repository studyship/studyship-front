import { createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'

export const LOAD_INTEREST = 'account/LOAD_INTEREST'
export const LOAD_INTEREST_SUCCESS = 'account/LOAD_INTEREST_SUCCESS'
export const LOAD_INTEREST_FAILURE = 'account/LOAD_INTEREST_FAILURE'

export const loadAccountInterest = createAsyncAction(
  LOAD_INTEREST,
  LOAD_INTEREST_SUCCESS,
  LOAD_INTEREST_FAILURE,
)<void, any, AxiosError>()
