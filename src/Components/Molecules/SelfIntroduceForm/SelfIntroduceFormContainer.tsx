import React from 'react'
import SelfIntroduceFormViewer from './SelfIntroduceFormViewer'
import { ISelfIntroduceForm } from './types'
import { useInputHandler } from 'src/hooks'
import { inputValidators } from 'src/lib'

const SelfIntroduceFormContainer = ({
  handleNextStage,
}: ISelfIntroduceForm) => {
  const { inputLengthLimits } = inputValidators
  const { bind } = useInputHandler('', inputLengthLimits(50))
  return (
    <SelfIntroduceFormViewer handleNextStage={handleNextStage} bind={bind} />
  )
}

export default SelfIntroduceFormContainer
