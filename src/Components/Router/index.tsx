import React from 'react'
import Home from 'src/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from '../Molecules'

interface IRouter {
  screenHeight: boolean
}
export default ({ screenHeight }: IRouter) => (
  <>
    <Router>
      <Header screenHeight={screenHeight} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </>
)
