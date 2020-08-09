import React from 'react'
import { NormalText, Input } from '../Atoms'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

interface LabelInput {
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
}: LabelInput) => {
  return (
    <Container>
      <NormalText text={label} fontSize={fontSize} fontColor={fontColor} />
      <Input
        placeholder={placeholder}
        border={border}
        placeholderColor={placeholderColor}
      />
    </Container>
  )
}

export default LabelInput
