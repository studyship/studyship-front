import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Home, CreateStudy } from 'src/Routes'
import { MainHeader } from 'src/Components/Molecules'
import { RootState } from 'src/store/modules'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const RootRouter = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.users)
  return (
    <>
      <Router>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateStudy} />
          {isLoggedIn ? <PrivateRouter /> : <PublicRouter />}
        </Switch>
      </Router>
    </>
  )
}

export default RootRouter
