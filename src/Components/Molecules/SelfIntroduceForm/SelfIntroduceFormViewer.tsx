import React from 'react'
import styled from 'styled-components'
import { ISelfIntroduceFormViewer } from './types'
import { NormalText, Button } from 'src/Components/Atoms'
import TextareaAutosize from 'react-textarea-autosize'
import { mainColorBlue } from 'src/styles/Colors'

const Container = styled.div``
const STextareaAutosize = styled(TextareaAutosize)`
  margin-bottom: 6px;
  width: 100%;
  font-weight: normal;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${mainColorBlue};
  resize: none;
  outline: none;
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
        placeholder="ex) 개발하는 디자이너가 되고 싶은 김수민입니다."
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
