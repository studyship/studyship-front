import React from 'react'
import { MarginStyleProps } from 'src/@types'
import { NormalText, RowBox, Toggle } from '../Atoms'
import { ToggleProps } from '../Atoms/Toggle'

interface RowMsgAndToggleProps extends ToggleProps, MarginStyleProps {
  interval?: string
  fontSize?: string
  text: string
}
const RowMsgAndToggle = ({
  interval,
  text,
  onChange,
  toggleMsg,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  fontSize,
}: RowMsgAndToggleProps) => {
  return (
    <RowBox
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <NormalText fontSize={fontSize} text={text} marginRight={interval} />
      <Toggle onChange={onChange} toggleMsg={toggleMsg} />
    </RowBox>
  )
}

export default RowMsgAndToggle
