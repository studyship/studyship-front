import React, { useState } from 'react'
import InterestFormViewer from './InterestFormViewer'
import { IInterestForm } from './types'
import { deleteSelectedItemInArray } from 'src/lib'
import { categoryOptions } from './dummyOptions'

const InterestFormContainer = ({ handleNextStage }: IInterestForm) => {
  const [selectedInterest, setSelectedInterest] = useState<Array<string>>([])
  const [interestList, setInterestList] = useState(categoryOptions)

  const handleCurrentTab = (category: string) => {
    const updateActiveTab = interestList.map((interest) =>
      interest.category === category
        ? { ...interest, isActiveCategory: true }
        : { ...interest, isActiveCategory: false },
    )
    setInterestList(updateActiveTab)
  }
  const handleSelectedInterest = (currentItem: string) => {
    const updateCurrentTab = interestList.map((interest) => {
      return {
        ...interest,
        list: interest.list.map((item) => {
          return {
            ...item,
            groupItems: item.groupItems.map((groupItem) =>
              groupItem.type === currentItem
                ? {
                    ...groupItem,
                    isActiveItem: true,
                  }
                : {
                    ...groupItem,
                  },
            ),
          }
        }),
      }
    })
    setInterestList(updateCurrentTab)
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
      handleNextStage={handleNextStage}
    />
  )
}

export default InterestFormContainer
