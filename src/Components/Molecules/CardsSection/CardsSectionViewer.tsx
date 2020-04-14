import React from 'react'
import styled from 'styled-components'
import { Title } from 'src/Components/Atoms'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { SectionTemplate, HomeTemplate } from 'src/Components/Templates'
import { Card } from 'src/Components/Molecules'

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
const STitle = styled(Title)`
  margin-bottom: 27px;
`
const ArrowIconBox = styled.div`
  display: flex;
  flex-direction: row;
`
const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-between;
  margin-bottom: 90px;
`

const CardsSectionViewer = () => {
  return (
    <SectionTemplate>
      <Container>
        <HomeTemplate>
          <TitleBox>
            <STitle text="스터디쉽이 추천하는 스터디" type="normal" />
            <ArrowIconBox>
              <LeftOutlined style={{ fontSize: '30px' }} />
              <RightOutlined />
            </ArrowIconBox>
          </TitleBox>
          <CardBox>
            {Array.from({ length: 10 }, () => (
              <Card
                titleStyles={{
                  type: 'normal',
                  size: '14px',
                  text: '스터디 제목',
                }}
              />
            ))}
          </CardBox>
          <TitleBox>
            <STitle text="새로 생긴 스터디" type="normal" />
            <ArrowIconBox>
              <LeftOutlined style={{ fontSize: '30px' }} />
              <RightOutlined />
            </ArrowIconBox>
          </TitleBox>
          <CardBox>
            {Array.from({ length: 10 }, () => (
              <Card
                titleStyles={{
                  type: 'normal',
                  size: '14px',
                  text: '스터디 제목',
                }}
              />
            ))}
          </CardBox>
        </HomeTemplate>
      </Container>
    </SectionTemplate>
  )
}

export default CardsSectionViewer
