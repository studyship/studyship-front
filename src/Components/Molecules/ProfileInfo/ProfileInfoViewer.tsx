import React from 'react'
import styled from 'styled-components'

import profileIcon from 'src/styles/icons/ss_icon_profile.svg'
import kakaoDark from 'src/styles/icons/ss_icon_kako_dark.svg'
import {
  Icon,
  BoldText,
  NormalText,
  CircularItem,
  Button,
  TouchLabel,
} from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Avatar = styled(Icon)``
const Kakao = styled(Icon)``
const Update = styled(Button)`
  background-color: ${mainColorBlue};
  border-radius: 33px;
  font-weight: bold;
`

const ProfileInfoViewer = () => {
  return (
    <Container>
      <Avatar imgSrc={profileIcon} svgSize={88} />
      <BoldText text="sumkall" fontSize="24px" />
      <TouchLabel marginTop="10px" marginBottom="10px">
        <NormalText text="designsuminkim@gmail.com" fontSize="12px" />
        <CircularItem
          borderStyle="1px solid #ff4c41"
          area="10px"
          marginLeft="5px"
        >
          <NormalText text="!" fontSize="5px" fontColor="#ff4c41" />
        </CircularItem>
      </TouchLabel>
      <TouchLabel marginBottom="10px">
        <Kakao imgSrc={kakaoDark} marginRight="5px" />
        <NormalText text="카카오톡 정보" fontSize="12px" />
      </TouchLabel>
      <Update text="프로필 수정" paddingBottom="10px" paddingTop="10px" />
    </Container>
  )
}

export default ProfileInfoViewer
