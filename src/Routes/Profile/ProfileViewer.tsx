import React from 'react'
import styled from 'styled-components'

import { RowBox } from 'src/Components/Atoms'
import { ProfileCard, Dashboard } from 'src/Components/Molecules'

import { tabOptions as profileTabOptions, selectBoxOptions } from './options'
import { useActivationTabs, useHandleSelectTab, useSelectBox } from 'src/hooks'
import { MediaSize } from 'src/Components/Templates'
import useRouter from 'src/hooks/useRouter'

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
  const { match } = useRouter()
  const { renderTabNavs } = useActivationTabs(
    [
      {
        name: '프로필',
        to: '/profile',
        key: '/profile',
      },
      {
        name: '스터디 신청 현황',
        to: '/status',
        key: '/status',
      },
      {
        name: '설정',
        to: '/setting',
        key: '/setting',
      },
    ],
    match.path,
  )

  const { tabOptions, onClick: handleNavTab } = useHandleSelectTab(
    profileTabOptions,
  )
  const { bind: orderSelectBinder } = useSelectBox(firstOptions[0])
  const { bind: categorySelectBinder } = useSelectBox(secondOptoins[0])

  return (
    <>
      {renderTabNavs()}
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
    </>
  )
}

export default ProfileViewer
