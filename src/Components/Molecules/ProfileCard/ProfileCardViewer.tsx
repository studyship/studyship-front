import React from 'react'
import styled from 'styled-components'

import { ProfileInfo } from 'src/Components/Molecules'
import { HorizontalBar } from 'src/Components/Atoms'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    </ProfileContainer>
  )
}

export default ProfileCardViewer