import React from 'react'
import styled from 'styled-components'
import { marginStyles } from 'src/styles/mixin'
import { MarginStyleProps } from 'src/@types'

interface StyleProps extends MarginStyleProps {
  className?: string
  fontSize?: string
  fontColor?: string
  wrap?: boolean
  width?: string
}

interface NormalTextProps extends StyleProps {
  text: string
  onClick?: () => void
}

const Container = styled.p<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width && width};
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize ?? '22px'};
  color: ${({ fontColor }) => fontColor ?? 'black'};
  white-space: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  ${marginStyles};
`

const NormalTextViewer = ({
  className,
  fontSize,
  text,
  onClick,
  fontColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  wrap,
  width,
}: NormalTextProps) => {
  return (
    <Container
      className={className}
      fontColor={fontColor}
      fontSize={fontSize}
      onClick={onClick}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      wrap={wrap}
      width={width}
    >
      {text}
    </Container>
  )
}

export default NormalTextViewer
