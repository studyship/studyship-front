import React from 'react'
import styled from 'styled-components'

import { TooltipProps, TooltipStyleProps } from 'src/@types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`
const Direction = styled.div`
  display: flex;
  z-index: 0;
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
`
const Content = styled.div`
  z-index: 1;
  display: flex;
  width: fit-content;
  background-color: ${(props: TooltipStyleProps) =>
    props.bgColor ? props.bgColor : '#ffffff'};
  border-radius: ${(props: TooltipStyleProps) =>
    props.borderRadius ? props.borderRadius : '10px'};
`

const TopArrowTooltipViewer = ({
  children,
  direction,
  bgColor,
  borderRadius,
}: TooltipProps) => {
  return (
    <Container>
      <>
        <Direction bgColor={bgColor}></Direction>
        <Content borderRadius={borderRadius} bgColor={bgColor}>
          {children}
        </Content>
      </>
    </Container>
  )
}

export default TopArrowTooltipViewer
