export interface IUnit {
  isActive: string
  isBorderStyle?: string
}

export interface IInterestList {
  category: string
  list: Array<string>
  isActive: boolean
}
export interface IInterestFormViewer extends IInterestForm {
  interestList: Array<IInterestList>
  selectedInterest: Array<string>
  handleCurrentTab: (interest: IInterestList) => void
  handleSelectedInterest: (currentTab: string) => void
  handleRemoveInterest: (selectedIndex: number) => void
}
export interface IInterestForm {
  handleNextStage: (nextTab: string) => void
}
