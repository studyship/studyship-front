import { useMemo } from 'react'
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import queryString from 'query-string'

const useRouter = <P extends { [key: string]: any }>() => {
  const params = useParams<P>()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      match,
      location,
      history,
    }
  }, [params, match, location, history])
}

export default useRouter
