export interface TAccountForm {
  handleModalInactive: () => void
  currentTab: TTabs
}

type TInterests = {
  category: string
  contents: Array<string>
}
export type TTabs = {
  title: string | Array<string>
  subTitle: string
  horizontal: string
  tab: string
  form: React.ReactNode
}

export interface IAccountFormViewer extends TAccountForm {
  currentTab: TTabs
  handleModalInactive: () => void
}
