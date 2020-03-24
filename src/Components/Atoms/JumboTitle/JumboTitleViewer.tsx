import React from 'react'
import styled from 'styled-components'

const JumboText = styled.h2``

interface IJumboTitle {
  children: React.ReactNode
}

const JumboTitleViewer = ({ children }: IJumboTitle) => {
  return <JumboText>{children}</JumboText>
}

export default JumboTitleViewer
