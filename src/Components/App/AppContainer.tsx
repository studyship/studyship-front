import React, { useState, useEffect } from 'react'
import AppViewer from './AppViewer'

const AppContainer = () => {
  const [screenHeight, setScreenHeight] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e: Event) => {
    if (window.scrollY > 80) {
      setScreenHeight(true)
    } else {
      setScreenHeight(false)
    }
  }

  return <AppViewer screenHeight={screenHeight} />
}

export default AppContainer
