import React from 'react'
import { Home } from 'src/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from '../Molecules'

export default () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </>
)
