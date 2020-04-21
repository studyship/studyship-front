export interface ITopNav {
  screenHeight: boolean
}
export interface IHeader extends ITopNav {
  loginModalIsVisible: boolean
  joinModalIsVisible: boolean
  handleLoginModalActive: () => void
  handleJoinModalActive: () => void
  handleLoginModalInactive: () => void
  handleJoinModalInactive: () => void
}
