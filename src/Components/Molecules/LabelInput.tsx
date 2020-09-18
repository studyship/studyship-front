import React from 'react'
import { NormalText, Input } from '../Atoms'
import styled from 'styled-components'
import { MarginStyleProps } from 'src/@types'
import { marginStyles } from 'src/styles/mixin'

const Container = styled.div<MarginStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${marginStyles};
`

interface LabelInput extends MarginStyleProps {
  label: string
  fontSize?: string
  fontColor?: string
  placeholder: string
  border?: string
  placeholderColor?: string
}

const LabelInput = ({
  label,
  fontSize,
  fontColor,
  placeholder,
  border,
  placeholderColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: LabelInput) => {
  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <NormalText
        text={label}
        fontSize={fontSize}
        fontColor={fontColor}
        marginBottom="10px"
      />
      <Input
        placeholder={placeholder}
        border={border}
        placeholderColor={placeholderColor}
      />
    </Container>
  )
}

export default LabelInput
