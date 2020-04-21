import React from 'react'
import styled from 'styled-components'
import {
  Icon,
  BoldText,
  NormalText,
  HorizontalBar,
  CircularItem,
  RowBox,
} from 'src/Components/Atoms'
import { descriptionColor } from 'src/styles/Colors'
import BockmarkIcon from 'src/styles/icons/icon_bookmark_fill.svg'
import ReactLogo from 'src/styles/images/react-logo.png'
import Darkness from 'src/styles/images/darkness.png'
import sampleIcon from 'src/styles/icons/users.png'
import { subColorLightGrey } from 'src/styles/Colors'

const Container = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin: 1rem;
  transition: 0.25s;
  cursor: pointer;
  :hover {
    position: relative;
    top: -10px;
    box-shadow: 0 7px 2px -2px rgba(0, 0, 0, 0.04);
  }
  @media screen and (max-width: 450px) {
    flex: 0 0 40%;
    display: flex;
    margin: 0px 10px;
    -webkit-overflow-scrolling: touch; /* 끝에서 바운스 되도록*/
    scroll-snap-type: x mandatory;
    scroll-snap-align: start;
  }
`
const CategoryBox = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
  width: 100%;
`
const Category = styled.li`
  color: ${descriptionColor};
  font-size: 14px;

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
const TitleTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > *:nth-child(1) {
    margin-right: 15px;
  }
  > *:nth-child(2) {
    margin-top: 10px;
  }
`
const Timezone = styled(NormalText)`
  color: ${subColorLightGrey};
`
const Bookmark = styled.div`
  width: 18px;
  height: 25px;
`
const ImageSection = styled.div`
  width: 100%;
  height: 180px;
  border-radius: inherit;
`
const ContetSection = styled.div`
  width: 100%;
  height: 130px;
  padding: 11px 18px;
`
const WriterSection = styled(RowBox)`
  width: 100%;
  height: 50px;
  padding: 11px 18px;
  > * :nth-child(1) {
    margin-right: 5px;
  }
  > * :nth-child(2) {
    margin-right: 3px;
  }
`
const Target = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`
const Description = styled.div`
  display: flex;
  flex-direction: row;
  > *:nth-child(1) {
    margin-right: 5px;
  }
`
const DescriptionIcon = styled.div`
  width: 15px;
  height: 13px;
`
const DescriptionText = styled(NormalText)`
  color: ${subColorLightGrey};
`
const DescriptionInfo = styled(RowBox)`
  justify-content: space-between;
  width: 40%;
`

const CardViewer = () => {
  return (
    <Container>
      <ImageSection>
        <Icon imgSrc={ReactLogo} />
      </ImageSection>
      <HorizontalBar color="#e6e6e6" />
      <ContetSection>
        <TitleBox>
          <BoldText fontSize="18px" text="스터디 제목입니다" />
          <TitleTag>
            <Timezone fontSize="11px" text="16시간전" />
            <Bookmark>
              <Icon imgSrc={BockmarkIcon} />
            </Bookmark>
          </TitleTag>
        </TitleBox>
        <CategoryBox>
          <Category>qwe</Category>
          <Category>></Category>
          <Category>123</Category>
        </CategoryBox>
        <Target>
          <NormalText fontSize="14px" text="페이스북 클론 코딩" />
        </Target>
        <DescriptionBox>
          <DescriptionInfo>
            {Array.from({ length: 2 }, () => (
              <Description>
                <DescriptionIcon>
                  <Icon imgSrc={sampleIcon}></Icon>
                </DescriptionIcon>
                <DescriptionText fontSize="14px" text="3/5명" />
              </Description>
            ))}
          </DescriptionInfo>
          {Array.from({ length: 1 }, () => (
            <Description>
              <DescriptionIcon>
                <Icon imgSrc={sampleIcon}></Icon>
              </DescriptionIcon>
              <DescriptionText fontSize="14px" text="3/5명" />
            </Description>
          ))}
        </DescriptionBox>
      </ContetSection>
      <HorizontalBar color="#e6e6e6" />
      <WriterSection>
        <CircularItem area="20px">
          <Icon imgSrc={Darkness}></Icon>
        </CircularItem>
        <NormalText fontSize="13px" text="선장" />
        <BoldText fontSize="13px" text="김수민" />
      </WriterSection>
    </Container>
  )
}

export default CardViewer
