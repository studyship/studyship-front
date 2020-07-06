import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { SelectBoxOptionTypes, MarginStyleProps } from 'src/@types'
import { marginStyles } from 'src/styles/mixin'

const SelectBox = styled(Select)<StyleProps>`
  width: ${({ width }) => (width ? width : '140px')};
  ${marginStyles};
`

interface StyleProps extends MarginStyleProps {
  width?: string
}

interface SelectBoxProps extends StyleProps {
  options: SelectBoxOptionTypes
  selectBoxBinder?: any
}

const SelectBoxViewer = ({
  options,
  selectBoxBinder,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
}: SelectBoxProps) => {
  return (
    <SelectBox
      width={width}
      options={options}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...selectBoxBinder}
    />
  )
}

export default SelectBoxViewer
