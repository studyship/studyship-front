import createAsyncThunk from 'src/lib/createAsyncThunk'
import { loadPostRequestAsync, setPostRequestAsync } from './actions'
import callApi from 'src/lib/callApi'

export const getPostsThunk = createAsyncThunk(loadPostRequestAsync, callApi)
export const postPostsThunk = createAsyncThunk(setPostRequestAsync, callApi)
