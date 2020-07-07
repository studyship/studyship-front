import React from 'react'
import styled from 'styled-components'
import { RotatePlusProps } from 'src/@types'

const Plus = styled.div<RotatePlusProps>`
  position: relative;
  width: ${({ size }) => (size ? size : '18px')};
  height: ${({ size }) => (size ? size : '18px')};
  transition: all ease 0.5s;

  ${({ isChoose }) => isChoose && 'transform: rotate(135deg);'};

  cursor: pointer;
  :before,
  :after {
    content: '';
    position: absolute;
    background-color: ${({ isChoose }) => (isChoose ? 'white' : '#b3b3b3')};
  }
  :before {
    left: 50%;
    top: 4px;
    bottom: 4px;
    width: 1px;
    transform: translateX(-50%);
  }
  :after {
    top: 50%;
    left: 4px;
    right: 4px;
    height: 1px;
    transform: translateY(-50%);
  }
`

const RotatePlusViewer = ({ isChoose, size }: RotatePlusProps) => {
  return <Plus isChoose={isChoose || false} size={size} />
}

export default RotatePlusViewer
