import React from 'react'
import styled from 'styled-components'
import { getUniqueKey } from 'src/lib'
import { dragLock } from 'src/styles/StylesOptions'
import { NormalText } from '../Atoms'

const Area = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  width: 100%;
  min-height: 303px;
  background-color: #fff;
  ${dragLock};
`
const Wrapper = styled.div`
  padding: 0px 27px;
  border-bottom: 1px solid #e6e6e6;
  :nth-last-child() {
    border: none;
  }
`
const Column = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: ${({ gridColumns }) =>
    gridColumns ?? '1.5fr 3fr 1fr 1fr'};
  align-content: center;
  justify-items: flex-start;
  padding: 0px 20px;
  height: 33px;
  border-bottom: 1px solid #e6e6e6;
  :last-child {
    border: none;
  }
`
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 27px;
`
interface StyleProps {
  gridColumns?: string
}
interface GridRowTableProps extends StyleProps {
  columnNames: string[]
  rowElements: () => JSX.Element[]
}

const GridRowTable = ({
  gridColumns,
  columnNames,
  rowElements,
}: GridRowTableProps) => {
  return (
    <Area>
      <Wrapper>
        <Column gridColumns={gridColumns}>
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
      <InnerBox>{rowElements()}</InnerBox>
    </Area>
  )
}

export default GridRowTable
