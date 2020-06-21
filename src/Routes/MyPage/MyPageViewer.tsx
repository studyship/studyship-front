import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from 'src/Components/Atoms'
import { IntroSection } from 'src/Components/Molecules'
import profileLogo from 'src/styles/icons/ss_icon_profile.svg'
import error from 'src/styles/icons/ss_icon_error.svg'
import FadeIn from 'react-fade-in'

import ProfileTable from './Table'
import NewCard from './NewCard'
import Tabs from './Tabs'

const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 10px;
`

const Container = styled.div``

const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 1160px;
  margin-top: 39px;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 20px);
`

const ProfileContainer = styled(CardContainer)`
  max-width: 360px;
  align-items: center;
  padding: 38px 40px 51px 40px;
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`

const Username = styled.a`
  margin-top: 20px;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
`

const CardButton = styled(CardContainer)`
  display: flex;
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 19px;
`

const EditButton = styled.button`
  width: 240px;
  height: 44px;
  background: #60d3e0;
  border-radius: 33px;
  margin-bottom: 20px;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;

  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

const BottomSection = styled.div`
  padding-top: 27px;
`

const Label = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.41px;
  color: #6c6b6b;
  margin-bottom: 16px;
`

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 28px;
`

const BioContainer = styled.div`
  margin-top: 4px;
  margin-bottom: 48px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  color: #333333;
`

const InterestCard = styled(CardContainer)`
  border-color: #60d3e0;
  border-radius: 15px;
  padding: 6px 10px;
  margin-right: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
  color: #60d3e0;
  letter-spacing: -0.41px;
`

const ButtonLabel = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.41px;
  color: #333333;
  margin-right: 5px;
`

const StudyContainer = styled.div`
  flex: 1;
  padding: 33px 0px 0px 40px;
  background: white;
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
`

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* overflow-x: auto; */
  margin-bottom: 90px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`

const MyPageViewer = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <FadeIn delay={100}>
      <Container>
        <IntroSection />
        <Section>
          <ProfileContainer>
            <TopSection>
              <Icon imgSrc={profileLogo} svgSize={88} />
              <Username>sumkal</Username>
              <CardButton>
                <ButtonLabel>design@gmail.com</ButtonLabel>
                <Icon imgSrc={error} />
              </CardButton>
              <CardButton>
                <ButtonLabel>카카오톡 정보</ButtonLabel>
              </CardButton>
              <EditButton>프로필 수정</EditButton>
            </TopSection>
            <BottomSection>
              <Label>관심사</Label>
              <InterestsContainer>
                <InterestCard>디자인 전체</InterestCard>
                <InterestCard>공모전</InterestCard>
                <InterestCard>UX/UI</InterestCard>
                <InterestCard>공모전</InterestCard>
              </InterestsContainer>
              <Label>활동뱃지</Label>

              <Label>상세 프로필</Label>
              <ProfileTable />
              <Label>자기 소개</Label>
              <BioContainer>
                디자인과 개발 모두 평정하고싶은 꿈나무 디발자입니다. 자유로운
                분위기 속에서 공부하는 것을 지향하지만 루즈해지는 분위기는
                좋아하지 않습니다
              </BioContainer>
              <Label>스터디 성향</Label>
            </BottomSection>
          </ProfileContainer>
          <StudyContainer>
            <Tabs
              onChange={(index) => setSelectedTab(index)}
              index={selectedTab}
            />
            {selectedTab === 0 && (
              <>
                <Header>
                  <p>최신순</p>
                </Header>
                <CardBox>
                  <NewCard />
                  <NewCard />
                  <NewCard />
                </CardBox>
              </>
            )}
          </StudyContainer>
        </Section>
      </Container>
    </FadeIn>
  )
}

export default MyPageViewer
