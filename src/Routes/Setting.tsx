import React from 'react'
import styled from 'styled-components'
import {
  BoldText,
  Button,
  Input,
  NormalText,
  RowBox,
} from 'src/Components/Atoms'
import { ProfileSubNavigator } from 'src/Components/Templates'
import { RowMsgAndToggle } from 'src/Components/Molecules'

const Area = styled.div`
  display: flex;
  flex-direction: column;
  height: 690px;
  padding: 20px 40px;
  background-color: #fff;
`
const Wrapper = styled.div`
  margin-top: 25px;
  padding: 0px 200px;
`
const SInput = styled(Input)`
  width: 336px;
  height: 40px;
  background-color: #f9f9f9;
  color: #333333;
  ::placeholder {
    color: #b2b2b2;
  }
`
const DeleteManual = styled(NormalText)`
  font-size: 14px;
  line-height: 20px;
`
const SButton = styled(Button)`
  background: #ffc545;
  border-radius: 33px;
  margin-left: auto;
  margin-right: auto;
`

const Setting = () => {
  return (
    <ProfileSubNavigator>
      <Wrapper>
        <Area>
          <BoldText text="계정 정보" fontSize="16px" marginBottom="12px" />
          <SInput placeholder="이메일을 입력하세요" marginBottom="35px" />
          <BoldText text="비밀번호 변경" fontSize="16px" marginBottom="12px" />
          <SInput placeholder="비밀번호를 입력하세요." marginBottom="12px" />
          <SInput placeholder="비밀번호 화인" marginBottom="35px" />
          <BoldText text="계정 삭제" fontSize="16px" marginBottom="12px" />
          <DeleteManual text="designsuminkim@gmail.com 계정을 삭제하시겠습니까?" />
          <DeleteManual text="이 계정에는 6개의 스터디 목록이 포함되어있습니다." />
          <DeleteManual
            text="계정 삭제시 해당 콘텐츠가 모두 삭제됩니다."
            marginBottom="5px"
          />
          <DeleteManual
            text="계정 삭제하기"
            fontColor="#60D3E0"
            marginBottom="35px"
          />
          <BoldText
            text="이메일 알림 설정"
            fontSize="16px"
            marginBottom="12px"
          />

          <RowMsgAndToggle
            marginBottom="12px"
            text="스터디 가입 신청 / 수락 알림시 이메일로 알림"
            interval="30px"
            toggleMsg={['ON', 'OFF']}
            fontSize="14px"
            onChange={() => {
              //
            }}
          />
          <RowMsgAndToggle
            marginBottom="90px"
            text="신규 스터디 추천 및 정보 뉴스레터"
            interval="30px"
            toggleMsg={['ON', 'OFF']}
            fontSize="14px"
            onChange={() => {
              //
            }}
          />
          <RowBox>
            <SButton
              text="저장하기"
              fontSize="15px"
              width="300px"
              height="48px"
            />
          </RowBox>
        </Area>
      </Wrapper>
    </ProfileSubNavigator>
  )
}

export default Setting
