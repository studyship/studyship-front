export interface TAccountForm {
  handleModalInactive: () => void
  currentTab: TTabs
}

type TInterests = {
  category: string
  contents: Array<string>
}
type TTabs = {
  tab: string
  form: React.ReactNode
}

export interface IAccountFormViewer extends TAccountForm {
  currentTab: TTabs
  // handleNextStage: () => void
  handleModalInactive: () => void
}
