import React, { useEffect, useState } from 'react'
import HomeViewer from './HomeViewer'

const HomeContainer = () => {
  const [screenHeight, setScreenHeight] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e: Event) => {
    if (window.scrollY > 0) {
      setScreenHeight(true)
    } else {
      setScreenHeight(false)
    }
  }

  return <HomeViewer screenHeight={screenHeight} />
}

export default HomeContainer
