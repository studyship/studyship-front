import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1160px;
  margin-left: auto;
  margin-right: auto;
`

interface MediaSize {
  children: React.ReactNode
  className?: string
}

const MediaSize = ({ children, className }: MediaSize) => {
  return <Container className={className}>{children}</Container>
}

export default MediaSize
