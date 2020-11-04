import React from 'react'
import { Route } from 'react-router-dom'
import { Profile, StudyDashboard } from 'src/Routes'

const PrivateRouter = () => {
  return (
    <>
      <Route path="/profile" component={Profile} />
      <Route path="/status" component={StudyDashboard} />
      {/* <Route path="/setting" component={Configure} /> */}
      {/* <Route path="/create" component={CreateStudy} /> */}
    </>
  )
}

export default PrivateRouter
