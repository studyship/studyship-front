import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

type TColumnBox = {
  className?: string
  children: React.ReactNode
}

const ColumnBoxViewer = ({ className, children }: TColumnBox) => {
  return <Container className={className}>{children}</Container>
}

export default ColumnBoxViewer
