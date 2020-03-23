import React from 'react'
import Home from 'src/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)
