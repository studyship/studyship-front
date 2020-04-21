import React from 'react'
import styled from 'styled-components'

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
type TRowBox = {
  className?: string
  children: React.ReactNode
}
const RowBoxViewer = ({ className, children }: TRowBox) => {
  return <RowBox className={className}>{children}</RowBox>
}

export default RowBoxViewer
