import React from 'react'
import styled from 'styled-components'
import { PaddingStyleProps, MarginStyleProps } from 'src/@types'
import { marginStyles, paddingStyles } from 'src/styles/mixin'

const Label = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  padding: 4px 8px;
  margin-left: 5px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;

  ${paddingStyles};
  ${marginStyles};
`

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  borderStyle?: string
  bgColor?: string
}

interface TouchLabelProps extends StyleProps {
  children: React.ReactChild | Array<React.ReactChild>
  onClick?: () => void
}

const TouchLabelViewer = ({
  children,
  onClick,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  borderStyle,
  bgColor,
}: TouchLabelProps) => {
  return (
    <Label
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      borderStyle={borderStyle}
      bgColor={bgColor}
    >
      {children}
    </Label>
  )
}

export default TouchLabelViewer
