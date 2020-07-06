import React from 'react'
import styled from 'styled-components'

const NavTab = styled.div<StyleProps>`
  ${({ isSelected, activationColor, inactivationColor }) =>
    isSelected ? `color:${activationColor}` : `color:${inactivationColor}`};
  font-weight: normal;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
`

interface StyleProps {
  isSelected: boolean
  activationColor: string
  inactivationColor: string
}

interface NavTabProps extends StyleProps {
  onClick: () => void
  text: string
}

const NavTabViewer = ({
  onClick,
  text,
  isSelected,
  activationColor,
  inactivationColor,
}: NavTabProps) => {
  return (
    <NavTab
      isSelected={isSelected}
      activationColor={activationColor}
      inactivationColor={inactivationColor}
      onClick={onClick}
    >
      {text}
    </NavTab>
  )
}

export default NavTabViewer
