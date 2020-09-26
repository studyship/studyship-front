import React from 'react'
import { Route } from 'react-router-dom'
import { Profile, CreateStudy } from 'src/Routes'

const PrivateRouter = () => {
  return (
    <>
      <Route path="/profile" component={Profile} />
      {/* <Route path="/create" component={CreateStudy} /> */}
    </>
  )
}

export default PrivateRouter
