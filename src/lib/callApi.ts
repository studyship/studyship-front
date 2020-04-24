import axios from 'axios'

interface IConfig {
  url: string
}

const callApi = async (config: IConfig) => {
  const accessToken = localStorage.getItem('token')
  const res = await axios('myUrl', {
    baseURL: `${window.location.origin}`,
    method: 'get',
    data: {
      accessToken,
      ...config,
    },
  })
  const result = res.data
  return result
}

export default callApi
