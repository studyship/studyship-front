import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Home, Profile } from 'src/Routes'
import { MainHeader } from 'src/Components/Molecules'
import { RootState } from 'src/store/modules'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

export default () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users)
  return (
    <>
      <Router>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          {isLoggedIn ? <PrivateRouter /> : <PublicRouter />}
        </Switch>
      </Router>
    </>
  )
}
