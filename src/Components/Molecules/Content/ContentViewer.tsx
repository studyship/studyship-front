import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 100px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`
const ContentBox = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const H3 = styled.h3`
  font-size: 40px;
  font-weight: 200;
  margin-bottom: 10px;
`
const Content = styled.p`
  position: relative;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 1px;
`
const LinkButton = styled(Link)``

const ContentViewer = () => {
  return (
    <Container>
      <ContentContainer>
        <ContentBox>
          <H3>STUDYSHIP</H3>
          <Content>
            rem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Content>
          <LinkButton to="#"></LinkButton>
        </ContentBox>
      </ContentContainer>
    </Container>
  )
}

export default ContentViewer
