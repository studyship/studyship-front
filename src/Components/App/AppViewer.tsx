import React from 'react'
import GlobalStyles from 'src/styles/GlobalStyles'
import Router from '../Router'

interface IApp {
  screenHeight: boolean
}

const AppViewer = ({ screenHeight }: IApp) => {
  return (
    <>
      <GlobalStyles />

      <Router screenHeight={screenHeight} />
    </>
  )
}

export default AppViewer
