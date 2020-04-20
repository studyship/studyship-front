import styled from 'styled-components'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { mainColorBlue } from 'src/styles/Colors'

// Coulumn Row Box
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: space-around;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
const CategoryBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  float: left;
  width: ${(props: ISpan) =>
    isMobile ? (props.span / 4) * 100 : (props.span / 10) * 100}%;
  padding: 1rem;
`
interface ISpan {
  span: number
}
const CategoryName = styled.div`
  margin-top: 9px;
  font-size: 15px;
  word-break: keep-all;
`
const CircularItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: ${mainColorBlue};
`

const CategoryViewer = () => {
  return (
    <CategoryContainer>
      {Array.from({ length: 10 }, () => (
        <CategoryBox span={1}>
          <CircularItem>CATEGORY</CircularItem>
          <CategoryName>개발</CategoryName>
        </CategoryBox>
      ))}
    </CategoryContainer>
  )
}

export default CategoryViewer
