import React from 'react'
import styled from 'styled-components'
import { mainColorBlue } from 'src/styles/Colors'
import { HomeTemplate, SectionTemplate } from 'src/Components/Templates'
import { isMobile } from 'react-device-detect'

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80');
`
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
    <SectionTemplate>
      <Container>
        <HomeTemplate>
          <CategoryContainer>
            {Array.from({ length: 10 }, () => (
              <CategoryBox span={1}>
                <CircularItem>CATEGORY</CircularItem>
                <CategoryName>개발</CategoryName>
              </CategoryBox>
            ))}
          </CategoryContainer>
        </HomeTemplate>
      </Container>
    </SectionTemplate>
  )
}

export default IntroSectionViewer
