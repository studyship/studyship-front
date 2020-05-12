import React from 'react'
import styled from 'styled-components'
import { ISelfIntroduceFormViewer } from './types'
import { NormalText, Button } from 'src/Components/Atoms'
import TextareaAutosize from 'react-textarea-autosize'
import { mainColorBlue } from 'src/styles/Colors'

const Container = styled.div``
const STextareaAutosize = styled(TextareaAutosize)`
  padding: 7px 9px;
  min-height: 160px;
  margin-bottom: 6px;
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #e6e6e6;
  resize: none;
  outline: none;
  border-radius: 5px;
  ::placeholder {
    color: #b3b3b3;
  }
`
const TextLimits = styled(NormalText)`
  width: 100%;
  text-align: right;
  color: #ffc545;
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
      <TextLimits fontSize="18px" text={`${bind.value.length}/50`} />
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
