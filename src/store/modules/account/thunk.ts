import createAsyncThunk from 'src/lib/createAsyncThunk'
import { loadAccountInterest } from './actions'
import callApi from 'src/lib/callApi'

export const getInterestsThunk = createAsyncThunk(loadAccountInterest, callApi)
