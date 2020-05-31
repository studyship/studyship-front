import React from 'react'
import styled from 'styled-components'
import { RotatePlusProps, PluseTypes } from 'src/@types'

const Plus = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  transition: all ease 0.5s;

  ${(props: PluseTypes) => props.isChoose && 'transform: rotate(135deg);'};

  cursor: pointer;
  :before,
  :after {
    content: '';
    position: absolute;
    background-color: ${(props: PluseTypes) =>
      props.isChoose ? 'white' : '#b3b3b3'};
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

const RotatePlusViewer = ({ isChoose }: RotatePlusProps) => {
  return <Plus isChoose={isChoose} />
}

export default RotatePlusViewer
