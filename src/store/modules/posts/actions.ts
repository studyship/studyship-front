import { createAsyncAction } from 'typesafe-actions'
import { AxiosResponse, AxiosError } from 'axios'

export const LOAD_POST = 'studyship/LOAD_POST'
export const LOAD_POST_SUCCESS = 'studyship/LOAD_POST_SUCCESS'
export const LOAD_POST_FAILURE = 'studyship/LOAD_POST_FAILURE'

export const SET_POST = 'studyship/SET_POST'
export const SET_POST_SUCCESS = 'studyship/SET_POST_SUCCESS'
export const SET_POST_FAILURE = 'studyship/SET_POST_FAILURE'

export const loadPostRequestAsync = createAsyncAction(
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
)<void, AxiosResponse, AxiosError>()

export const setPostRequestAsync = createAsyncAction(
  SET_POST,
  SET_POST_SUCCESS,
  SET_POST_FAILURE,
)<void, AxiosResponse, AxiosError>()
