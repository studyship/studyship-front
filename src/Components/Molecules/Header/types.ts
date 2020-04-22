export interface ITopNav {
  screenHeight: boolean
}

type TTabs = {
  tab: string
  form: React.ReactNode
}
export interface IHeader extends ITopNav {
  isVisible: boolean
  handleModalActive: () => void
  handleModalInactive: () => void
  handleNextStage: (nextTab: string) => void
  currentTab: TTabs
}
