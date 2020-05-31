import React from 'react'
import styled from 'styled-components'
import { NormalText, RotatePlus } from '..'
import { mainColorBlue } from 'src/styles/Colors'
import booleanToNumber from 'src/lib/booleanToNumber'

interface SelectProps {
  isActive: number | boolean
}

interface TagProps extends SelectProps {
  itemName: string
  isActive: boolean
  isChoose: boolean
  onClick?: () => void
}

const Select = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.3em;
  padding: 6px 10px;
  ${(props: SelectProps) =>
    props.isActive
      ? `background-color: ${mainColorBlue}; color: white; border: 1px solid ${mainColorBlue};`
      : `background-color: white; color: #b3b3b3; border: 1px solid #b3b3b3;`};
  border-radius: 50px;
  cursor: pointer;
`
const ChoiceItem = styled(NormalText)`
  margin-left: 3px;
  margin-right: 5px;
  color: inherit;
`

const TagViewer = ({ itemName, isChoose, isActive, onClick }: TagProps) => {
  return (
    <Select isActive={booleanToNumber(isActive)} onClick={onClick}>
      <ChoiceItem text={itemName} fontSize="14px" />
      <RotatePlus isChoose={isChoose} />
    </Select>
  )
}

export default TagViewer
