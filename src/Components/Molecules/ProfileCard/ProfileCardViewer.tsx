import React from 'react'
import styled from 'styled-components'

import { ProfileInfo } from 'src/Components/Molecules'
import { HorizontalBar, BoldText } from 'src/Components/Atoms'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`
const LabelSection = styled.div``

const ProfileCardViewer = () => {
  return (
    <ProfileContainer>
      <ProfileInfo />
      <HorizontalBar marginTop="20px" marginBottom="25px" />
      <LabelSection>
        <BoldText text="관심사" fontSize="12px" fontColor="#6c6b68" />
      </LabelSection>
    </ProfileContainer>
  )
}

export default ProfileCardViewer
