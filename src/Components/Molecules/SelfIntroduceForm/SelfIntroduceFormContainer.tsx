import React from 'react'
import SelfIntroduceFormViewer from './SelfIntroduceFormViewer'
import { ISelfIntroduceForm } from './types'

const SelfIntroduceFormContainer = ({
  handleNextStage,
}: ISelfIntroduceForm) => {
  return <SelfIntroduceFormViewer handleNextStage={handleNextStage} />
}

export default SelfIntroduceFormContainer
