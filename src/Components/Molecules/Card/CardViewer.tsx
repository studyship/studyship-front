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
import ReactLogo from 'src/styles/images/react-logo.png'
import Darkness from 'src/styles/images/darkness.png'
import { ReactComponent as BockmarkIcon } from 'src/styles/icons/icon_bookmark_fill.svg'
import { ReactComponent as ClockIcon } from 'src/styles/icons/ss_icon_clock.svg'
import { ReactComponent as LocationIcon } from 'src/styles/icons/ss_icon_location.svg'
import { ReactComponent as GroupIcon } from 'src/styles/icons/ss_icon_group.svg'
import { ReactComponent as WhatchIcon } from 'src/styles/icons/ss_icon_whatch.svg'
import { ReactComponent as CommentIcon } from 'src/styles/icons/ss_icon_comment.svg'
import { MarginStyleProps } from 'src/@types'

const Container = styled.div<CardProps>`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 360px;
  background-color: inherit;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  transition: 0.25s;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '54px'};
  cursor: pointer;
  ${({ hoverRef }) =>
    !hoverRef &&
    `:hover {
    position: relative;
    top: -10px;
    box-shadow: 0 7px 2px -2px rgba(0, 0, 0, 0.04);
  }`};

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

interface CardProps extends MarginStyleProps {
  hoverRef?: React.RefObject<HTMLDivElement>
  renderDimmer?: () => JSX.Element | null
}

const CardViewer = ({
  hoverRef,
  renderDimmer,
  marginBottom,
  marginTop,
}: CardProps) => {
  return (
    <Container
      ref={hoverRef}
      hoverRef={hoverRef}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {renderDimmer && renderDimmer()}
      <ImageSection>
        <Icon imgSrc={ReactLogo} />
      </ImageSection>
      <HorizontalBar color="#e6e6e6" />
      <ContetSection>
        <TitleBox>
          <BoldText fontSize="18px" text="스터디 제목입니다" />
          <Bookmark>
            <BockmarkIcon />
          </Bookmark>
        </TitleBox>
        <CategoryBox>
          <Category>디자인</Category>
          <Category>{'>'}</Category>
          <Category>UXUI</Category>
        </CategoryBox>
        <Target>
          <NormalText fontSize="14px" text="페이스북 클론 코딩" />
        </Target>
        <DescriptionBox>
          <DescriptionInfo>
            <Description>
              <ClockIcon />
              <DescriptionText fontSize="12px" text="토, 일" />
            </Description>
            <Description>
              <LocationIcon />
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
            <GroupIcon />
            <DescriptionText fontSize="12px" text="3/5명" />
          </Description>
        </WriterSection>
        <PostInfomation>
          <Description>
            <WhatchIcon />
            <DescriptionText fontSize="12px" text="206" />
          </Description>
          <Description>
            <CommentIcon />
            <DescriptionText fontSize="12px" text="9" />
          </Description>
        </PostInfomation>
      </RowBox>
    </Container>
  )
}

export default CardViewer
