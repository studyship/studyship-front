import React from 'react'
import styled from 'styled-components'
import { dragLock } from 'src/styles/StylesOptions'
import { BoldText } from '../Atoms'
import { MarginStyleProps, PaddingStyleProps } from 'src/@types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  width: 100%;
  min-height: 303px;
  background-color: #fff;
  ${dragLock};
`
const Wrapper = styled.div<StyleProps>`
  padding: 0px 27px;
  border-bottom: 1px solid #e6e6e6;
  background-color: ${({ bgColor }) => bgColor ?? 'tranparent'};
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
  bgColor?: string
  fontColor?: string
}
interface GridRowTableProps extends StyleProps {
  columnNames: string[]
  rowElements: JSX.Element[]
}

const GridRowTable = ({
  gridColumns,
  columnNames,
  rowElements,
  bgColor,
  fontColor,
}: GridRowTableProps) => {
  return (
    <Container>
      <Wrapper bgColor={bgColor}>
        <Column gridColumns={gridColumns} fontColor={fontColor}>
          <BoldText
            text={columnNames[0]}
            fontSize="14px"
            fontColor={fontColor ?? '#6C6B6B'}
          />
          <BoldText
            text={columnNames[1]}
            fontSize="14px"
            fontColor={fontColor ?? '#6C6B6B'}
          />
          <BoldText
            text={columnNames[2]}
            fontSize="14px"
            fontColor={fontColor ?? '#6C6B6B'}
          />
        </Column>
      </Wrapper>
      <InnerBox>{rowElements}</InnerBox>
    </Container>
  )
}

export default GridRowTable
