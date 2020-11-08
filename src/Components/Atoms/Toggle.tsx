import React from 'react'
import { Switch } from 'antd'
import styled from 'styled-components'

export interface ToggleProps {
  onChange: VoidFunction
  toggleMsg: string[]
  style?: React.CSSProperties
}
const SSwitch = styled(Switch)`
  width: 60px;
  &[aria-checked='true'] {
    background-color: #ffc545;
  }
`
const Toggle = ({ onChange, toggleMsg, style }: ToggleProps) => {
  return (
    <SSwitch
      onChange={onChange}
      checkedChildren={toggleMsg[0]}
      unCheckedChildren={toggleMsg[1]}
      style={style}
    />
  )
}

export default Toggle
