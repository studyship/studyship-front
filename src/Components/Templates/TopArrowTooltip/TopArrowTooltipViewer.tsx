import React from 'react'
import styled from 'styled-components'

import { TooltipProps, TooltipStyleProps } from 'src/@types'

const Container = styled.div`
  position: absolute;
  top: 24px;
  right: -27px;
  display: flex;
  flex-direction: column;
`
const Direction = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  top: 10px;
  left: 90px;
  height: 17px;
  width: 17px;
  background-color: ${(props: TooltipStyleProps) =>
    props.bgColor ? props.bgColor : '#ffffff'};
  border: inherit;
  transform: rotate(-55deg) skew(-16deg);
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  border-bottom-color: ${(props: TooltipStyleProps) =>
    props.bgColor ? props.bgColor : '#ffffff'};
  border-left-color: ${(props: TooltipStyleProps) =>
    props.bgColor ? props.bgColor : '#ffffff'};
`
const Content = styled.div`
  z-index: 0;
  display: flex;
  width: fit-content;
  background-color: ${(props: TooltipStyleProps) =>
    props.bgColor ? props.bgColor : '#ffffff'};
  border-radius: ${(props: TooltipStyleProps) =>
    props.borderRadius ? props.borderRadius : '10px'};
  border: 1px solid #c4c4c4;
`

const TopArrowTooltipViewer = ({
  children,
  direction,
  bgColor,
  borderRadius,
}: TooltipProps) => {
  return (
    <Container>
      <Direction bgColor={bgColor}></Direction>
      <Content borderRadius={borderRadius} bgColor={bgColor}>
        {children}
      </Content>
    </Container>
  )
}

export default TopArrowTooltipViewer
