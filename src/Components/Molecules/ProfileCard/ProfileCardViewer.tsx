import React from 'react'
import styled from 'styled-components'

import {
  ProfileInfo,
  DetailProfile,
  TendencySlider,
} from 'src/Components/Molecules'
import { HorizontalBar, Tag } from 'src/Components/Atoms'
import { LabelSection } from 'src/Components/Templates'
import { getUniqueKey } from 'src/lib'
import { ReactComponent as OneBuildBadge } from 'src/styles/icons/ss_one_build_badge.svg'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 40px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`
const TendencyWrapper = styled.div`
  width: 100%;
`

const ProfileCardViewer = () => {
  return (
    <ProfileContainer>
      <ProfileInfo />
      <HorizontalBar marginTop="20px" marginBottom="25px" />
      <LabelSection labelText="관심사" marginBottom="40px">
        {Array.from({ length: 5 }, (item, index) => (
          <Tag
            key={getUniqueKey(index)}
            text="UIUX"
            paddingHorizontal="10px"
            paddingVertical="6px"
            marginRight="3px"
            marginBottom="5px"
          />
        ))}
      </LabelSection>
      <LabelSection labelText="활동 뱃지">
        {Array.from({ length: 4 }, (item, index) => (
          <OneBuildBadge
            key={getUniqueKey(index)}
            style={{ marginRight: '10px' }}
          />
        ))}
      </LabelSection>
      <LabelSection labelText="상세 프로필" marginTop="40px">
        <DetailProfile
          phoneNumber="000-0000-0000"
          favorAddress="Seoul"
          favorJob="Developer"
        />
      </LabelSection>
      <LabelSection labelText="스터디 성향" marginTop="40px">
        <TendencyWrapper>
          {Array.from({ length: 4 }, (_, index) => (
            <TendencySlider
              key={getUniqueKey(index)}
              lowText="완전 열공"
              highText="가끔 회식도"
              textWidth="58px"
              fontSize="12px"
            />
          ))}
        </TendencyWrapper>
      </LabelSection>
    </ProfileContainer>
  )
}

export default ProfileCardViewer
