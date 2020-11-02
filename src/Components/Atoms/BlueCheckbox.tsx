import React from 'react'
import styled from 'styled-components'
import checkedIcon from 'src/styles/icons/ss_v_mark.svg'

import { Icon } from '.'

const Container = styled.label<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #b3b3b3;
  background-color: ${({ checked }) => (checked ? '#60D3E0' : '#fff')};
`
const CheckBox = styled.input`
  display: none;
`
const Check = styled.div`
  position: absolute;
  object-fit: cover;
`
interface StyleProps {
  checked: boolean
}
type YellowCheckboxProps = {
  htmlFor?: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BlueCheckbox = ({ htmlFor, checked, onChange }: YellowCheckboxProps) => {
  return (
    <>
      <Container htmlFor={htmlFor ?? 'check'} checked={checked}>
        <Check>{checked ? <Icon imgSrc={checkedIcon} /> : null}</Check>
      </Container>
      <CheckBox
        type="checkbox"
        id={htmlFor ?? 'check'}
        checked={checked}
        onChange={onChange}
      />
    </>
  )
}

export default BlueCheckbox
