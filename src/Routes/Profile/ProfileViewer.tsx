import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import { RowBox } from 'src/Components/Atoms'
import { ProfileHeader, ProfileCard, Dashboard } from 'src/Components/Molecules'

import { tabOptions as profileTabOptions, selectBoxOptions } from './options'
import { useHandleSelectTab, useSelectBox } from 'src/hooks'

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
const ProfileCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export enum SelecteType {
  profile = 0,
  studyStatus = 1,
  setting = 2,
}

const ProfileViewer = () => {
  const { firstOptions, secondOptoins } = selectBoxOptions
  const [selected, setSelected] = useState<SelecteType>(SelecteType.profile)

  const handleSelected = useCallback((selectIndex: SelecteType) => {
    setSelected(selectIndex)
  }, [])

  const { tabOptions, onClick: handleNavTab } = useHandleSelectTab(
    profileTabOptions,
  )
  const { bind: orderSelectBinder } = useSelectBox(firstOptions[0])
  const { bind: categorySelectBinder } = useSelectBox(secondOptoins[0])

  return (
    <>
      <ProfileHeader handleSelected={handleSelected} selectIndex={selected} />
      <Container>
        <Section>
          <Col xs={0} sm={4} md={4} lg={3}>
            <ProfileCardWrapper>
              <ProfileCard />
            </ProfileCardWrapper>
          </Col>
          <Col xs={12} sm={6} md={10} lg={9}>
            <Dashboard
              tabOptions={tabOptions}
              orderSelectBinder={orderSelectBinder}
              categorySelectBinder={categorySelectBinder}
              firstOptions={firstOptions}
              secondOptoins={secondOptoins}
              handleNavTab={handleNavTab}
            />
          </Col>
        </Section>
      </Container>
    </>
  )
}

export default ProfileViewer
