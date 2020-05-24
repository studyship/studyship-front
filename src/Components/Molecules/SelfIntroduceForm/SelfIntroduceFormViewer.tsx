import React from 'react'
import styled from 'styled-components'
import { ISelfIntroduceFormViewer } from './types'
import { NormalText, Button } from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'

const Container = styled.div`
  width: 100%;
`
const STextareaAutosize = styled.textarea`
  padding: 7px 10px;
  margin-bottom: 6px;
  min-height: 130px;
  width: 100%;
  background-color: transparent;
  border: 1px solid #e6e6e6;
  font-weight: normal;
  font-size: 16px;
  resize: none;
  outline: none;
  border-radius: 5px;
  ::placeholder {
    color: #b3b3b3;
  }
`
const TextLimits = styled(NormalText)`
  position: relative;
  top: -30px;
  right: 8px;
  text-align: right;
  color: ${mainColorBlue};
  margin-bottom: 25px;
`
const FinishBtn = styled(Button)`
  background-color: ${mainColorBlue};
`

const SelfIntroduceFormViewer = ({
  handleNextStage,
  bind,
}: ISelfIntroduceFormViewer) => {
  return (
    <Container>
      <STextareaAutosize
        placeholder="예) 디자인과 개발 모두 평정하고싶은 꿈나무 디발자입니다. 자유로운 분위기 속에서 공부하는 것을 지향하지만 루즈해지는 분위기는 좋아하지 않습니다."
        {...bind}
      />
      <TextLimits fontSize="16px" text={`${bind.value.length}/300`} />
      <FinishBtn
        text="다음~?"
        onClick={() => {
          handleNextStage('vertify')
        }}
      />
    </Container>
  )
}

export default SelfIntroduceFormViewer
