import React from 'react'
import { Route } from 'react-router-dom'
import { Profile } from 'src/Routes'

const PrivateRouter = () => {
  return (
    <>
      <Route path="/profile/:id" component={Profile} />
    </>
  )
}

export default PrivateRouter
