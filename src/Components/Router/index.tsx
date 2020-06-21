import React from 'react'
import { Home, Profile } from 'src/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainHeader } from '../Molecules'

export default () => (
  <>
    <Router>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </Router>
  </>
)
