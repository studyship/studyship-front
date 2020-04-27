import createAsyncThunk from 'src/lib/createAsyncThunk'
import { loadSaveTokenRequestAsync } from './actions'
import callApi from 'src/lib/callApi'

export const setToken = createAsyncThunk(loadSaveTokenRequestAsync, callApi)
