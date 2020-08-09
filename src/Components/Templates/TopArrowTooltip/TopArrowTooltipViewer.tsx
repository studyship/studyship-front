import React from 'react'
import styled from 'styled-components'
import { dragLock } from 'src/styles/StylesOptions'

import { TooltipProps, TooltipStyleProps } from 'src/@types'

const Container = styled.div`
  z-index: 100;
  position: absolute;
  top: 24px;
  right: -27px;
  display: flex;
  flex-direction: column;
  ${dragLock}
`
const Direction = styled.div<TooltipStyleProps>`
  display: flex;
  z-index: 1;
  position: relative;
  top: 10px;
  left: ${({ arrowPostion }) => arrowPostion ?? '90px'};
  height: 17px;
  width: 17px;
  background-color: ${({ bgColor }) => bgColor ?? '#ffffff'};
  border: inherit;
  transform: rotate(-55deg) skew(-16deg);
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  border-bottom-color: ${({ bgColor }) => bgColor ?? '#ffffff'};
  border-left-color: ${({ bgColor }) => bgColor ?? '#ffffff'};
`
const Content = styled.div<TooltipStyleProps>`
  z-index: 0;
  display: flex;
  width: fit-content;
  background-color: ${({ bgColor }) => bgColor ?? '#ffffff'};
  border-radius: ${({ bgColor }) => bgColor ?? '#ffffff'};
  border: 1px solid #c4c4c4;
`

const TopArrowTooltipViewer = ({
  children,
  direction,
  bgColor,
  borderRadius,
  arrowPostion,
}: TooltipProps) => {
  return (
    <Container>
      <Direction bgColor={bgColor} arrowPostion={arrowPostion} />
      <Content borderRadius={borderRadius} bgColor={bgColor}>
        {children}
      </Content>
    </Container>
  )
}

export default TopArrowTooltipViewer
