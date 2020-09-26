import { createReducer, PayloadAction } from 'typesafe-actions'
import { PostsAction, PostsState } from './types'
import { LOAD_POST_SUCCESS, SET_POST_SUCCESS } from './actions'
import { AxiosResponse } from 'axios'

const iniitalState: PostsState = {
  status: 'ok',
  data: {},
}

const postsReducer = createReducer<PostsState, PostsAction>(iniitalState, {
  [LOAD_POST_SUCCESS]: (state, action) => applyGetPosts(state, action),
  [SET_POST_SUCCESS]: (state, action) => applySetPosts(state, action),
})

const applyGetPosts = (
  state: PostsState,
  action: PayloadAction<'studyship/LOAD_POST_SUCCESS', AxiosResponse<unknown>>,
) => {
  const { payload } = action
  return {
    ...state,
    payload,
  }
}

const applySetPosts = (
  state: PostsState,
  action: PayloadAction<'studyship/SET_POST_SUCCESS', AxiosResponse<unknown>>,
) => {
  const { payload } = action
  return {
    ...state,
    payload,
  }
}

export default postsReducer
