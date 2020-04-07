import React from 'react'
import LazyLoad from 'react-lazyload'
import LogoSL from 'src/styles/icons/SS_Logo_WhiteS.png'
import styled from 'styled-components'

const SLazyLoad = styled(LazyLoad)``
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const IconViewer = () => {
  return (
    <SLazyLoad>
      <Image src={LogoSL} />
    </SLazyLoad>
  )
}

export default IconViewer
