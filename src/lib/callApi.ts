import axios, { Method } from 'axios'

type CallApi = {
  url: string
  method: Method
  [key: string]: any
}

const callApi = async (config: CallApi) => {
  const accessToken = localStorage.getItem('token')
  const res = await axios('myUrl', {
    baseURL: `${window.location.origin}`,
    method: config.method,
    data: {
      accessToken,
      ...config,
    },
  })
  const result = res.data
  return result
}

export default callApi
