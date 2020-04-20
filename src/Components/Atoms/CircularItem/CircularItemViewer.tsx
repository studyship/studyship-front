import React from 'react'
import styled from 'styled-components'
import { mainColorBlue } from 'src/styles/Colors'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: ICircularItem) => props.area && props.area};
  height: ${(props: ICircularItem) => props.area && props.area};
  border-radius: 50%;
  background-color: ${mainColorBlue};
`

interface ICircularItem {
  className?: string
  children?: React.ReactNode
  area: string
}

const CircularItemViewer = ({ children, area }: ICircularItem) => {
  return <Container area={area}>{children}</Container>
}

export default CircularItemViewer
