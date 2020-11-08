import React from 'react'
import styled from 'styled-components'

import { RowBox } from 'src/Components/Atoms'
import { ProfileCard, Dashboard } from 'src/Components/Molecules'
import { useHandleSelectTab, useSelectBox } from 'src/hooks'
import { MediaSize, SubNavigator } from 'src/Components/Templates'

import { tabOptions as profileTabOptions, selectBoxOptions } from './options'

const Section = styled(RowBox)`
  margin-top: 40px;
  align-items: flex-start;
`
const ProfileCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 40px;
`

const ProfileViewer = () => {
  const { firstOptions, secondOptoins } = selectBoxOptions
  const { tabOptions, onClick: handleNavTab } = useHandleSelectTab(
    profileTabOptions,
  )
  const { bind: orderSelectBinder } = useSelectBox(firstOptions[0])
  const { bind: categorySelectBinder } = useSelectBox(secondOptoins[0])

  return (
    <SubNavigator>
      <MediaSize>
        <Section>
          <ProfileCardWrapper>
            <ProfileCard />
          </ProfileCardWrapper>
          <Dashboard
            tabOptions={tabOptions}
            orderSelectBinder={orderSelectBinder}
            categorySelectBinder={categorySelectBinder}
            firstOptions={firstOptions}
            secondOptoins={secondOptoins}
            handleNavTab={handleNavTab}
          />
        </Section>
      </MediaSize>
    </SubNavigator>
  )
}

export default ProfileViewer
