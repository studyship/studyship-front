import React from 'react'
import styled from 'styled-components'
import { mainColorBlue } from 'src/styles/Colors'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 100vh;
`
// Coulumn Row Box
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const CategoryBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  float: left;
  width: ${(props: ISpan) => (props.span ? (props.span / 10) * 100 : '8.33')}%;
  padding: 1rem;
`
interface ISpan {
  span: number
}
const CategoryName = styled.div`
  margin-top: 9px;
  font-size: 15px;
`

// circular item
const CircularItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: ${mainColorBlue};
`

const IntroSectionViewer = () => {
  return (
    <Container>
      <CategoryContainer>
        <CategoryBox span={1}>
          <CircularItem>CATEGORY</CircularItem>
          <CategoryName>개발</CategoryName>
        </CategoryBox>
        <CategoryBox span={1}>
          <CircularItem>CATEGORY</CircularItem>
          <CategoryName>디자인</CategoryName>
        </CategoryBox>
        <CategoryBox span={1}>
          <CircularItem>CATEGORY</CircularItem>
          <CategoryName>외국어</CategoryName>
        </CategoryBox>
        <CategoryBox span={1}>
          <CircularItem>CATEGORY</CircularItem>
          <CategoryName>취업준비</CategoryName>
        </CategoryBox>
      </CategoryContainer>
    </Container>
  )
}

export default IntroSectionViewer
