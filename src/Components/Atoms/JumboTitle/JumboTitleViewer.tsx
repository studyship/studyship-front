import React from 'react'
import styled from 'styled-components'

const JumboText = styled.h2`
  font-size: 90px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1em;
`

interface IJumboTitle {
  children: React.ReactNode
}

const JumboTitleViewer = ({ children }: IJumboTitle) => {
  return <JumboText>{children}</JumboText>
}

export default JumboTitleViewer
