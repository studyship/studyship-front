import React from 'react'
import InterestFormViewer from './InterestFormViewer'
import { categoryOptions } from './dummyOptions'
import { useInterestList } from './hooks'
import { HandleNextStageType } from 'src/@types'

const InterestFormContainer = ({ handleNextStage }: HandleNextStageType) => {
  const {
    handleSelectedInterest,
    handleCurrentTab,
    interestList,
  } = useInterestList(categoryOptions, 5)

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
