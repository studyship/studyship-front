import React from 'react'
import styled from 'styled-components'

import { ProfileInfo } from 'src/Components/Molecules'
import { HorizontalBar, Tag, Icon } from 'src/Components/Atoms'
import { LabelSection } from 'src/Components/Templates'
import { getUniqueKey } from 'src/lib'
import perfectMemberBadge from 'src/styles/icons/ss_perfect_member_badge.svg'
import oneBuildBadge from 'src/styles/icons/ss_one_build_badge.svg'

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
          <Icon
            key={getUniqueKey(index)}
            imgSrc={perfectMemberBadge}
            marginRight="5px"
          />
        ))}
      </LabelSection>
    </ProfileContainer>
  )
}

export default ProfileCardViewer
