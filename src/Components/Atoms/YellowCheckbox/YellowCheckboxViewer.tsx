import React from 'react'
import styled from 'styled-components'
import checkedIcon from 'src/styles/icons/ss_icon_checked.png'
import uncheckIcon from 'src/styles/icons/ss_icon_uncheck.png'
import { Icon } from '..'

const Container = styled.div``
const Label = styled.label``
const CheckBox = styled.input`
  display: none;
`

type YellowCheckboxProps = {
  bindCheckbox: {
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
}

const YellowCheckboxViewer = ({ bindCheckbox }: YellowCheckboxProps) => {
  return (
    <Container>
      <Label htmlFor="check">
        {bindCheckbox.checked ? (
          <Icon imgSrc={checkedIcon} />
        ) : (
          <Icon imgSrc={uncheckIcon} />
        )}
      </Label>
      <CheckBox type="checkbox" id="check" {...bindCheckbox} />
    </Container>
  )
}

export default YellowCheckboxViewer
