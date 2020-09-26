import { createReducer, PayloadAction } from 'typesafe-actions'
import { AxiosResponse } from 'axios'

import { AccounReducer } from 'src/@types'
import { LOAD_INTEREST_SUCCESS } from './actions'
import { AccountActions } from './types'

type PayloadType<Action extends string, T> = PayloadAction<Action, T>

const iniitalState: AccounReducer = {
  interests: [],
}

const postsReducer = createReducer<AccounReducer, AccountActions>(
  iniitalState,
  {
    [LOAD_INTEREST_SUCCESS]: (state, action) =>
      applyGetInterests(state, action),
  },
)

const applyGetInterests = (
  state: AccounReducer,
  action: PayloadType<'account/LOAD_INTEREST_SUCCESS', AxiosResponse<unknown>>,
) => {
  const { payload } = action
  return {
    ...state,
    payload,
  }
}

export default postsReducer
