import React, { useState } from 'react'
import HeaderViewer from './HeaderViewer'
import { ITopNav } from './types'
import { useModalHandler } from '@devgw-react/blank-modal'
import { LoginForm, InterestForm, EmailForm } from '..'

const HeaderContainer = ({ screenHeight }: ITopNav) => {
  const {
    isVisible,
    handleModalActive,
    handleModalInactive,
  } = useModalHandler()

  const handleNextStage = (nextTab: string) => {
    const choicedTab = tabs.filter((item) => item.tab === nextTab)
    setCurrentTab(choicedTab[0])
  }

  const [tabs, setTabs] = useState([
    { tab: 'login', form: <LoginForm handleNextStage={handleNextStage} /> },
    { tab: 'join', form: <EmailForm handleNextStage={handleNextStage} /> },
    { tab: 'interest', form: <InterestForm /> },
  ])
  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <HeaderViewer
      screenHeight={screenHeight}
      isVisible={isVisible}
      handleModalActive={handleModalActive}
      handleModalInactive={handleModalInactive}
      handleNextStage={handleNextStage}
      currentTab={currentTab}
    />
  )
}

export default HeaderContainer
