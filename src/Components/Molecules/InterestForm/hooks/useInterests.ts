import { useState } from 'react'
import { InterestListTypes } from 'src/@types'

export type InterestType = {
  name: string
  isActivation: boolean
  groupName: string
}

const useInterests = (
  initailState: Array<InterestListTypes>,
  listLimits: number,
) => {
  const [interestList, setInterestList] = useState(initailState)
  const [selectedListLength, setSelectedListLength] = useState(0)
  const [selectedInterests, SetSelectedInterests] = useState<
    Array<InterestType>
  >([])

  const increaseSelectedList = () => {
    setSelectedListLength(selectedListLength + 1)
  }
  const decreseSelectedList = () => {
    setSelectedListLength(selectedListLength - 1)
  }

  const handlePushSelectedInterest = (updateCurrentTab: InterestType) => {
    SetSelectedInterests([...selectedInterests, updateCurrentTab])
  }
  const handlePopSelectedInterest = (selectedName: string) => {
    const updateInterests = selectedInterests.filter(({ name }) => {
      return selectedName !== name
    })

    SetSelectedInterests(updateInterests)
  }

  const handleCheckedAllType = (type: string, toggleType: boolean) => {
    const updateCurrentTab = interestList.map((interests) => {
      return {
        ...interests,
        list: interests.list.map((interest) => {
          if (interest.groupName === type) {
            if (toggleType) {
              handlePushSelectedInterest({
                name: interest.groupName,
                groupName: interest.groupName,
                isActivation: !interest.isActiveItem,
              })
            } else {
              handlePopSelectedInterest(interest.groupName)
            }
            return {
              ...interest,
              isActiveItem: toggleType,
            }
          } else {
            return {
              ...interest,
            }
          }
        }),
      }
    })

    setInterestList(updateCurrentTab)
  }

  const handleCurrentTab = (category: string) => {
    const updateActiveTab = interestList.map((interest) =>
      interest.category === category
        ? { ...interest, isActiveCategory: true }
        : { ...interest, isActiveCategory: false },
    )
    setInterestList(updateActiveTab)
  }

  const handleSelectedInterest = (
    currentItem: string,
    toggleType: boolean,
    parentKey: string,
  ) => {
    if (toggleType && selectedInterests.length < listLimits) {
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
                  handlePushSelectedInterest({
                    name: groupItem.type,
                    isActivation: toggleType,
                    groupName: item.groupName,
                  })

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
                    handlePopSelectedInterest(groupItem.type)
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

  return {
    handleCurrentTab,
    handleSelectedInterest,
    interestList,
    handleCheckedAllType,
    selectedInterests,
  }
}
export default useInterests
