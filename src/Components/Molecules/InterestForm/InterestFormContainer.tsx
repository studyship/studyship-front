import React, { useState } from 'react'
import InterestFormViewer from './InterestFormViewer'
import { IInterestList } from './types'
import {
  arrayToUnique,
  deleteSelectedItemInArray,
  arrayLengthLimits,
} from 'src/lib'

const InterestFormContainer = () => {
  const [selectedInterest, setSelectedInterest] = useState<Array<string>>([])
  const [interestList, setInterestList] = useState([
    {
      category: '디자인',
      list: ['design1', 'design2', 'design3', 'design4', 'design5', 'design6'],
      isActive: true,
    },
    {
      category: '개발',
      list: ['dev1', 'dev2', 'dev3', 'dev4', 'dev5', 'dev6'],
      isActive: false,
    },
  ])

  const handleCurrentTab = (interest: IInterestList) => {
    const updateInterest = interestList.map((item) =>
      item.category === interest.category
        ? { ...interest, isActive: true }
        : { ...item, isActive: false },
    )
    setInterestList(updateInterest)
  }
  const handleSelectedInterest = (current: string) => {
    const updateCurrentTab = arrayToUnique([...selectedInterest, current])
    const limits = arrayLengthLimits(updateCurrentTab, 5)
    setSelectedInterest(limits)
  }
  const handleRemoveInterest = (selectedIndex: number) => {
    const updateSelectedInterest = deleteSelectedItemInArray(
      selectedInterest,
      selectedIndex,
    )
    setSelectedInterest(updateSelectedInterest)
  }
  return (
    <InterestFormViewer
      interestList={interestList}
      handleCurrentTab={handleCurrentTab}
      handleSelectedInterest={handleSelectedInterest}
      selectedInterest={selectedInterest}
      handleRemoveInterest={handleRemoveInterest}
    />
  )
}

export default InterestFormContainer
