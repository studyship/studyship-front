import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'

import { RowBox } from 'src/Components/Atoms'
import { ProfileHeader, ProfileCard, Dashboard } from 'src/Components/Molecules'

import { tabOptions as profileTabOptions, selectBoxOptions } from './options'
import { useHandleSelectTab, useSelectBox } from 'src/hooks'
import { MediaSize } from 'src/Components/Templates'

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
      <MediaSize>
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
      </MediaSize>
    </>
  )
}

export default ProfileViewer
