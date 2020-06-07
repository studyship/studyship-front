import { useState } from 'react'
import { InterestListTypes } from 'src/@types'

export const useInterestList = (
  initailState: Array<InterestListTypes>,
  listLimits: number,
) => {
  const [interestList, setInterestList] = useState(initailState)
  const [selectedListLength, setSelectedListLength] = useState(0)

  const increaseSelectedList = () => {
    setSelectedListLength(selectedListLength + 1)
  }
  const decreseSelectedList = () => {
    setSelectedListLength(selectedListLength - 1)
  }

  const handleCurrentTab = (category: string) => {
    const updateActiveTab = interestList.map((interest) =>
      interest.category === category
        ? { ...interest, isActiveCategory: true }
        : { ...interest, isActiveCategory: false },
    )
    setInterestList(updateActiveTab)
  }

  const handleSelectedInterest = (currentItem: string, toggleType: boolean) => {
    if (listLimits - 1 < selectedListLength) {
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
                    isActiveItem: toggleType,
                  }
                  toggleType ? increaseSelectedList() : decreseSelectedList()
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
  return { handleCurrentTab, handleSelectedInterest, interestList }
}
