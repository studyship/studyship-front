import React from 'react'
import { HandleNextStageType } from 'src/@types'
import InterestFormViewer from './InterestFormViewer'
import { categoryOptions } from './dummyOptions'
import { useInterests } from './hooks'

const InterestFormContainer = ({ handleNextStage }: HandleNextStageType) => {
  const {
    handleSelectedInterest,
    handleCurrentTab,
    interestList,
  } = useInterests(categoryOptions, 5)

  return (
    <InterestFormViewer
      interestList={interestList}
      handleCurrentTab={handleCurrentTab}
      handleSelectedInterest={handleSelectedInterest}
      handleNextStage={handleNextStage}
    />
  )
}

export default InterestFormContainer
