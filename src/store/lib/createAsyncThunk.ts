import { AsyncActionCreatorBuilder } from 'typesafe-actions'
import { Dispatch } from 'redux'

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>

const createAsyncThunk = <
  A extends AnyAsyncActionCreator,
  F extends (...params: any[]) => Promise<any>
>(
  asyncActionCreator: A,
  promiseCreator: F,
) => {
  type Params = Parameters<F>
  return (...params: Params) => {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator
      dispatch(request())
      try {
        const res = await promiseCreator(...params)
        dispatch(success(res))
      } catch {
        dispatch(failure())
      }
    }
  }
}

export default createAsyncThunk
