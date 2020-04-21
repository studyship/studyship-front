import React from 'react'
import styled from 'styled-components'
import { IVerticalBar } from './types'

const VerticalBar = styled.span`
  margin-left: ${(props: IVerticalBar) =>
    props.horizonSapce ? props.horizonSapce : '5px'};
  margin-right: ${(props: IVerticalBar) =>
    props.horizonSapce ? props.horizonSapce : '5px'};
  color: inherit;
`
const VerticalBarViewer = ({ horizonSapce }: IVerticalBar) => {
  return <VerticalBar horizonSapce={horizonSapce}>|</VerticalBar>
}

export default VerticalBarViewer
