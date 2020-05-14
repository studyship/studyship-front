import React from 'react'
import SelfIntroduceFormViewer from './SelfIntroduceFormViewer'
import { ISelfIntroduceForm } from './types'
import { useInputText } from 'src/hooks'
import { inputValidators } from 'src/lib'

const SelfIntroduceFormContainer = ({
  handleNextStage,
}: ISelfIntroduceForm) => {
  const { inputLengthLimits } = inputValidators
  const { bind } = useInputText('', inputLengthLimits(300))
  return (
    <SelfIntroduceFormViewer handleNextStage={handleNextStage} bind={bind} />
  )
}

export default SelfIntroduceFormContainer
