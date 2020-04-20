import React from 'react'
import styled from 'styled-components'
import {
  Title,
  Icon,
  BoldText,
  NormarText,
  HorizontalBar,
} from 'src/Components/Atoms'
import { ITitle } from 'src/Components/Atoms/Title/types'
import { descriptionColor } from 'src/styles/Colors'
import BockmarkIcon from 'src/styles/icons/icon_bookmark_fill.svg'
import ReactLogo from 'src/styles/images/react-logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;
  border: 0.5px solid #e3e3e0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 1rem;
  @media screen and (max-width: 450px) {
    flex: 0 0 90%;
    display: flex;
    margin: 0px 10px;
    -webkit-overflow-scrolling: touch; /* 끝에서 바운스 되도록*/
    scroll-snap-type: x mandatory;
    scroll-snap-align: start;
  }
`
const STitle = styled(Title)`
  margin-bottom: 27px;
`
const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Category = styled.div`
  color: ${descriptionColor};
  font-size: 14px;
  margin-bottom: 18px;
  :nth-child(2n) {
    margin-left: 5px;
    margin-right: 5px;
  }
`
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const IconBox = styled.div`
  width: 18px;
  height: 25px;
`
const CardSection = styled.div`
  width: 100%;
  height: 180px;
  :nth-child(3) {
    padding: 11px 18px;
  }
`
const Target = styled.div`
  display: flex;
  flex-direction: row;
  > *:nth-child(1) {
    margin-right: 5px;
  }
`
interface ICard {
  titleStyles: ITitle
}

const CardViewer = ({ titleStyles }: ICard) => {
  return (
    <Container>
      <CardSection>
        <Icon imgSrc={ReactLogo} />
      </CardSection>
      <HorizontalBar />
      <CardSection>
        <TitleBox>
          <BoldText fontSize="18px" text="스터디 제목입니다" />
          <IconBox>
            <img src={BockmarkIcon} />
          </IconBox>
        </TitleBox>
        <CategoryBox>
          <Category>qwe</Category>
          <Category>></Category>
          <Category>123</Category>
        </CategoryBox>
        <Target>
          <BoldText fontSize="14px" text="목표" />
          <NormarText fontSize="14px" text="페이스북 클론 코딩" />
        </Target>
      </CardSection>
    </Container>
  )
}

export default CardViewer
