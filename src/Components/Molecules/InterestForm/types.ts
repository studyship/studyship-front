export interface IUnit {
  isActive: string
  isBorderStyle?: string
}

export interface List {
  groupName: string
  groupItems: Array<GroupItem>
}

export interface GroupItem {
  type: string
  isActiveItem: boolean
}

export interface InterestListTypes {
  isActiveCategory: boolean
  category: string
  list: Array<List>
}
export interface IInterestFormViewer extends IInterestForm {
  interestList: Array<InterestListTypes>
  selectedInterest: Array<GroupItem>
  handleCurrentTab: (category: string) => void
  handleSelectedInterest: (currentTab: string) => void
  handleRemoveInterest: (selectedIndex: number) => void
}
export interface IInterestForm {
  handleNextStage: (nextTab: string) => void
}
