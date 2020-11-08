import React from 'react'
import styled from 'styled-components'
import { SeletBoxBinderTypes, SelectBoxOptionTypes } from 'src/@types'
import { RowBox, SelectBox } from '../Atoms'

const SelectBoxWrapper = styled(RowBox)``

interface SelectBoxType {
  orderSelectBinder: SeletBoxBinderTypes
  categorySelectBinder: SeletBoxBinderTypes
  firstOptions: SelectBoxOptionTypes
  secondOptoins: SelectBoxOptionTypes
}
const GroupSelectBox = ({
  orderSelectBinder,
  categorySelectBinder,
  firstOptions,
  secondOptoins,
}: SelectBoxType) => {
  return (
    <SelectBoxWrapper>
      <SelectBox
        options={firstOptions}
        selectBoxBinder={orderSelectBinder}
        marginRight="10px"
        width="100px"
      />
      <SelectBox
        options={secondOptoins}
        selectBoxBinder={categorySelectBinder}
        width="100px"
      />
    </SelectBoxWrapper>
  )
}

export default GroupSelectBox
