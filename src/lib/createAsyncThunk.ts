import { AsyncActionCreatorBuilder } from 'typesafe-actions'
import { Dispatch } from 'redux'
import { startLoading, finishLoading } from 'src/store/modules/loading/actions'

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
      dispatch(startLoading(request().type))
      try {
        const res = await promiseCreator(...params)
        dispatch(success(res))
        dispatch(finishLoading(request().type))
      } catch {
        dispatch(failure())
      }
    }
  }
}

export default createAsyncThunk
