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
import BockmarkIcon from 'src/styles/icons/icon_bookmark_fill.svg'
import ReactLogo from 'src/styles/images/react-logo.png'
import Darkness from 'src/styles/images/darkness.png'
import clockIcon from 'src/styles/icons/ss_icon_clock.svg'
import locationIcon from 'src/styles/icons/ss_icon_location.svg'
import groupIcon from 'src/styles/icons/ss_icon_group.svg'
import whatchIcon from 'src/styles/icons/ss_icon_whatch.svg'
import commentIcon from 'src/styles/icons/ss_icon_message.svg'

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
  margin-bottom: 13px;
  width: 100%;
`
const Category = styled.li`
  color: #b3b3b3b3;
  font-size: 12px;

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
const Timezone = styled(NormalText)`
  color: #b3b3b3b3;
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
  width: 50%;
  padding: 11px 18px;
  > * :nth-child(1) {
    margin-right: 5px;
  }
  > * :nth-child(2) {
    margin-right: 3px;
  }
`
const PostInfomation = styled(RowBox)`
  width: 50%;
  justify-content: flex-end;
  padding: 11px 18px;
  > * :nth-child(1) {
    margin-right: 5px;
  }
  > * :nth-child(2) {
    margin-right: 5px;
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
`
const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const DescriptionIcon = styled.div`
  margin-right: 3px;
`
const DescriptionText = styled(NormalText)`
  color: #b3b3b3b3;
`
const DescriptionInfo = styled(RowBox)`
  justify-content: space-between;
  width: 35%;
`
const Nickname = styled(BoldText)`
  margin-right: 13px;
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
          <Bookmark>
            <Icon imgSrc={BockmarkIcon} />
          </Bookmark>
        </TitleBox>
        <CategoryBox>
          <Category>디자인</Category>
          <Category>></Category>
          <Category>UXUI</Category>
        </CategoryBox>
        <Target>
          <NormalText fontSize="14px" text="페이스북 클론 코딩" />
        </Target>
        <DescriptionBox>
          <DescriptionInfo>
            <Description>
              <DescriptionIcon>
                <Icon imgSrc={clockIcon}></Icon>
              </DescriptionIcon>
              <DescriptionText fontSize="12px" text="토, 일" />
            </Description>
            <Description>
              <DescriptionIcon>
                <Icon imgSrc={locationIcon}></Icon>
              </DescriptionIcon>
              <DescriptionText fontSize="12px" text="3/5명" />
            </Description>
          </DescriptionInfo>
          <Timezone fontSize="12px" text="16시간전" />
        </DescriptionBox>
      </ContetSection>
      <HorizontalBar color="#e6e6e6" />
      <RowBox>
        <WriterSection>
          <CircularItem area="20px">
            <Icon imgSrc={Darkness}></Icon>
          </CircularItem>
          <NormalText fontSize="12px" text="선장" />
          <Nickname fontSize="12px" text="김수민" />
          <Description>
            <DescriptionIcon>
              <Icon imgSrc={groupIcon} />
            </DescriptionIcon>
            <DescriptionText fontSize="12px" text="3/5명" />
          </Description>
        </WriterSection>
        <PostInfomation>
          <Description>
            <DescriptionIcon>
              <Icon imgSrc={whatchIcon} />
            </DescriptionIcon>
            <DescriptionText fontSize="12px" text="206" />
          </Description>
          <Description>
            <DescriptionIcon>
              <Icon imgSrc={commentIcon} />
            </DescriptionIcon>
            <DescriptionText fontSize="12px" text="9" />
          </Description>
        </PostInfomation>
      </RowBox>
    </Container>
  )
}

export default CardViewer
