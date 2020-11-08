import React from 'react'
import styled from 'styled-components'
import { NormalText } from '../Atoms'
import { GridRowTable } from '../Templates'

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
`
const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
`

const Bold = styled(NormalText)`
  font-weight: bold;
`

interface CheckboxAreaProps {
  columnNames?: string[]
  rowElements: JSX.Element[]
}

const CheckboxArea = ({
  columnNames = ['선택', '내가 쓴 댓글', '작성일', ''],
  rowElements,
}: CheckboxAreaProps) => {
  return (
    <Conatiner>
      <TextArea>
        <Bold text="전체 선택" fontColor="#6C6B6B" fontSize="14px" />
        <Bold text="선택 항목 삭제" fontColor="#6C6B6B" fontSize="14px" />
      </TextArea>
      <GridRowTable columnNames={columnNames} rowElements={rowElements} />
    </Conatiner>
  )
}

export default CheckboxArea
