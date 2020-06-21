import React from 'react'
import { Home, Profile } from 'src/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from '../Molecules'

export default () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </Router>
  </>
)
