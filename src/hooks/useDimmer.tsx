import React from 'react'
import Dimmer from 'src/Components/Atoms/Dimmer'
import useHover from './useHover'

function useDimmer<T extends HTMLElement>() {
  const { ref, isHover } = useHover<T>()
  const renderDimmer = () => (isHover ? <Dimmer /> : null)

  return {
    ref,
    renderDimmer,
  }
}

export default useDimmer
