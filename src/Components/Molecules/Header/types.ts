import { TTabs } from '../AccountForm/types'

export interface IHeader {
  isVisible: boolean
  handleModalActive: () => void
  handleModalInactive: () => void
  handleNextStage: (nextTab: string) => void
  currentTab: TTabs
  isLoggedIn: boolean
}
