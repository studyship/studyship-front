import React from 'react'
import styled from 'styled-components'
import { Title } from 'src/Components/Atoms'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { SectionTemplate, HomeTemplate } from 'src/Components/Templates'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 45px;
`
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ArrowIconBox = styled.div`
  display: flex;
  flex-direction: row;
`

const CardsSectionViewer = () => {
  return (
    <SectionTemplate>
      <Container>
        <HomeTemplate>
          <TitleBox>
            <Title text="스터디쉽이 추천하는 스터디" />
            <ArrowIconBox>
              <LeftOutlined style={{ fontSize: '30px' }} />
              <RightOutlined />
            </ArrowIconBox>
          </TitleBox>
        </HomeTemplate>
      </Container>
    </SectionTemplate>
  )
}

export default CardsSectionViewer
