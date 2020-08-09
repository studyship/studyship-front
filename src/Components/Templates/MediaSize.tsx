import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1570px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1313px) {
    width: 1180px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`

interface MediaSize {
  children: React.ReactNode
  className?: string
}

const MediaSize = ({ children, className }: MediaSize) => {
  return <Container className={className}>{children}</Container>
}

export default MediaSize
