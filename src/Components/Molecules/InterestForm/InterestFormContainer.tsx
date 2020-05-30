import React, { useState } from 'react'
import InterestFormViewer from './InterestFormViewer'
import { IInterestForm, List, GroupItem } from './types'
import { deleteSelectedItemInArray, arrayToUnique } from 'src/lib'
import { categoryOptions } from './dummyOptions'

const InterestFormContainer = ({ handleNextStage }: IInterestForm) => {
  const [selectedInterest, setSelectedInterest] = useState<Array<GroupItem>>([])
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
    if (selectedInterest.length === 5) {
      return
    } else {
      const updateCurrentTab = interestList.map((interest) => {
        return {
          ...interest,
          list: interest.list.map((item) => {
            return {
              ...item,
              groupItems: item.groupItems.map((groupItem) => {
                if (groupItem.type === currentItem) {
                  const updateItem = {
                    ...groupItem,
                    isActiveItem: true,
                  }
                  const updateSelectedList = [...selectedInterest, updateItem]

                  const uniqueSelectedList = arrayToUnique(updateSelectedList)
                  console.log(uniqueSelectedList)
                  setSelectedInterest(uniqueSelectedList)
                  return updateItem
                } else {
                  return {
                    ...groupItem,
                  }
                }
              }),
            }
          }),
        }
      })
      setInterestList(updateCurrentTab)
    }
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
