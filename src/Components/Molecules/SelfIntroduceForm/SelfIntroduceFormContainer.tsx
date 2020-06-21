import React from 'react'
import SelfIntroduceFormViewer from './SelfIntroduceFormViewer'
import { useInputText } from 'src/hooks'
import { inputValidators } from 'src/lib'

interface SelfIntroduceFormProps {
  handleNextStage: (nextTab: string) => void
}

const SelfIntroduceFormContainer = ({
  handleNextStage,
}: SelfIntroduceFormProps) => {
  const { inputLengthLimits } = inputValidators
  const { bind } = useInputText('', inputLengthLimits(300))
  return (
    <SelfIntroduceFormViewer handleNextStage={handleNextStage} bind={bind} />
  )
}

export default SelfIntroduceFormContainer
