import React from 'react'
import { useCheckList } from 'src/hooks'
import { getUniqueKey } from 'src/lib'
import styled from 'styled-components'
import { BlueCheckbox, NormalText } from '../Atoms'

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
`
const Area = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  width: 100%;
  min-height: 303px;
  background-color: #fff;
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 27px;
`
const Wrapper = styled.div`
  padding: 0px 27px;
  border-bottom: 1px solid #e6e6e6;
  :nth-last-child() {
    border: none;
  }
`
const Column = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr 1fr;
  align-content: center;
  justify-items: flex-start;
  padding: 0px 20px;
  height: 33px;
  border-bottom: 1px solid #e6e6e6;
  :last-child {
    border: none;
  }
`
const Bold = styled(NormalText)`
  font-weight: bold;
`
type CheckList = {
  id: string
  content: string
  createdAt: string
}
interface CheckboxAreaProps {
  columnNames?: string[]
  checkList: CheckList[]
}

const CheckboxArea = ({
  columnNames = ['선택', '내가 쓴 댓글', '작성일'],
  checkList,
}: CheckboxAreaProps) => {
  const { checkedValue, renderCheckbox } = useCheckList(checkList)

  return (
    <Conatiner>
      <TextArea>
        <Bold text="전체 선택" fontColor="#6C6B6B" fontSize="14px" />
        <Bold text="선택 항목 삭제" fontColor="#6C6B6B" fontSize="14px" />
      </TextArea>
      <Area>
        <Wrapper>
          <Column>
            {columnNames.map((name, i) => (
              <NormalText
                key={getUniqueKey(i)}
                text={name}
                fontSize="14px"
                fontColor="#6C6B6B"
              />
            ))}
          </Column>
        </Wrapper>
        <InnerBox>{renderCheckbox()}</InnerBox>
      </Area>
    </Conatiner>
  )
}

export default CheckboxArea
