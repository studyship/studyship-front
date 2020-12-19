import React from 'react'
import styled from 'styled-components'

import { ReactComponent as KakaoDark } from 'src/styles/icons/ss_icon_kakao_dark.svg'
import {
  NormalText,
  CircularItem,
  Button,
  TouchLabel,
} from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'
import Thumbnail from '../Thumbnail'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Update = styled(Button)`
  background-color: ${mainColorBlue};
  border-radius: 33px;
  font-weight: bold;
`

const ProfileInfoViewer = () => {
  return (
    <Container>
      <Thumbnail username="devgw" />
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
        <KakaoDark style={{ marginRight: '5px' }} />
        <NormalText text="카카오톡 정보" fontSize="12px" />
      </TouchLabel>
      <Update text="프로필 수정" paddingBottom="10px" paddingTop="10px" />
    </Container>
  )
}

export default ProfileInfoViewer
