import React from 'react'
import HeaderViewer from './HeaderViewer'
import { ITopNav } from './types'
import { useModalHandler } from '@devgw-react/blank-modal'

const HeaderContainer = ({ screenHeight }: ITopNav) => {
  const {
    isVisible: loginModalIsVisible,
    handleModalActive: handleLoginModalActive,
    handleModalInactive: handleLoginModalInactive,
  } = useModalHandler()
  const {
    isVisible: joinModalIsVisible,
    handleModalActive: handleJoinModalActive,
    handleModalInactive: handleJoinModalInactive,
  } = useModalHandler()

  return (
    <HeaderViewer
      screenHeight={screenHeight}
      loginModalIsVisible={loginModalIsVisible}
      joinModalIsVisible={joinModalIsVisible}
      handleLoginModalActive={handleLoginModalActive}
      handleJoinModalActive={handleJoinModalActive}
      handleLoginModalInactive={handleLoginModalInactive}
      handleJoinModalInactive={handleJoinModalInactive}
    />
  )
}

export default HeaderContainer
