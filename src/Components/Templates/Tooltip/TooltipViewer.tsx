import React from 'react'
import styled from 'styled-components'

import { TooltipProps } from 'src/@types'

const Container = styled.div``
const Direction = styled.div`
  position: relative;
  margin: 50px;
  width: 135px;
  height: 282px;
  background-color: pink;
  border-radius: 10px;
  :after {
    /* 두개로 합처서 해야함 대 실패*/
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid pink;
    content: '';
    position: absolute;
    top: -5px;
    left: 80%;
    transform: translate(-50%, -50%);

    /* left: -5px;
    top: 48%;
    transform: translate(-50%, -50%) rotate(-90deg); */

    /* right: -25px;
    top: 48%;
    transform: translate(-50%, -50%) rotate(90deg); */

    /* left: 50%;
    bottom: -15px;
    transform: translate(-50%, -50%) rotate(180deg); */
  }
`

const TooltipViewer = ({ children, direction }: TooltipProps) => {
  return <Direction>{children}</Direction>
}

export default TooltipViewer
