export interface IUnit {
  isActive: string
}

export interface IInterestList {
  category: string
  list: Array<string>
  isActive: boolean
}
export type TInterestFormViewer = {
  interestList: Array<IInterestList>
  selectedInterest: Array<string>
  handleCurrentTab: (interest: IInterestList) => void
  handleSelectedInterest: (currentTab: string) => void
  handleRemoveInterest: (selectedIndex: number) => void
}
