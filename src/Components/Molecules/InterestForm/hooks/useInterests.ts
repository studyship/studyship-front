import { useState } from 'react'
import { InterestListTypes } from 'src/@types'

const useInterests = (
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
    if (toggleType && selectedListLength < listLimits) {
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
                  !groupItem.isActiveItem && increaseSelectedList()
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
    } else {
      if (!toggleType) {
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
                    groupItem.isActiveItem && decreseSelectedList()
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
  }
  return { handleCurrentTab, handleSelectedInterest, interestList }
}
export default useInterests
