import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'

import { RowBox, NavTab } from 'src/Components/Atoms'
import { ProfileHeader, ProfileCard } from 'src/Components/Molecules'

import { profileTabOptions } from './options'
import { useHandleSelectTab } from 'src/hooks'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1568px;
  @media screen and (max-width: 1919px) {
    width: 1568px;
  }
  @media screen and (max-width: 1313px) {
    width: 800px;
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

  const { tabOptions, onClick } = useHandleSelectTab(profileTabOptions)

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
                  {tabOptions.map(({ title, isSelected, id }) => (
                    <NavTab
                      text={title}
                      isSelected={isSelected}
                      onClick={() => {
                        onClick(id)
                      }}
                      activationColor="#333333"
                      inactivationColor="#b3b3b3"
                    />
                  ))}
                </TabWrapper>
              </Col>
            </ProfileContent>
          </Col>
          <Col xs={9} sm={9} md={9} lg={9} />
        </Section>
      </Container>
    </>
  )
}

export default ProfileViewer
