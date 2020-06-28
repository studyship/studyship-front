import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import { RowBox } from 'src/Components/Atoms'
import { ProfileHeader, ProfileCard } from 'src/Components/Molecules'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1570px;
  @media screen and (max-width: 1313px) {
    width: 1180px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`
const Section = styled(RowBox)`
  padding: 40px 0px;
  align-items: flex-start;
`
const ProfileContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 38px;
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const TabNav = styled.div`
  font-weight: normal;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
`

export enum SelecteType {
  profile = 0,
  studyStatus = 1,
  setting = 2,
}

const ProfileViewer = () => {
  const [selected, setSelected] = useState<SelecteType>(SelecteType.profile)

  const handleSelected = useCallback((selectIndex: SelecteType) => {
    setSelected(selectIndex)
  }, [])

  return (
    <>
      <ProfileHeader handleSelected={handleSelected} selectIndex={selected} />
      <Container>
        <Section>
          <Col xs={0} sm={4} md={4} lg={3}>
            <CardWrapper>
              <ProfileCard />
            </CardWrapper>
          </Col>
          <Col xs={12} sm={6} md={10} lg={9}>
            <ProfileContent>
              <Col md={6} lg={6}>
                <TabWrapper>
                  <TabNav>내가 만든 스터디</TabNav>
                  <TabNav>가입한 스터디</TabNav>
                  <TabNav>북마크</TabNav>
                  <TabNav>내가 쓴 댓글</TabNav>
                  <TabNav>함께한 멤버</TabNav>
                </TabWrapper>
              </Col>
            </ProfileContent>
          </Col>
        </Section>
      </Container>
    </>
  )
}

export default ProfileViewer
