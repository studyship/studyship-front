import { TTabs } from '../AccountForm/types'

export interface ITopNav {
  screenHeight: boolean
}

export interface IHeader extends ITopNav {
  isVisible: boolean
  handleModalActive: () => void
  handleModalInactive: () => void
  handleNextStage: (nextTab: string) => void
  currentTab: TTabs
  isLoggedIn: boolean
}
