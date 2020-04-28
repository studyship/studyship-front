import React, { useState } from 'react'
import HeaderViewer from './HeaderViewer'
import { ITopNav } from './types'
import { useModalHandler } from '@devgw-react/blank-modal'
import {
  LoginForm,
  InterestForm,
  EmailForm,
  SelfIntroduceForm,
  MailVertifyForm,
} from '..'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/modules'

const HeaderContainer = ({ screenHeight }: ITopNav) => {
  const {
    isVisible,
    handleModalActive,
    handleModalInactive,
  } = useModalHandler()

  const { isLoggedIn } = useSelector((state: RootState) => state.users)

  const handleNextStage = (nextTab: string) => {
    const choicedTab = tabs.filter((item) => item.tab === nextTab)
    setCurrentTab(choicedTab[0])
  }

  const [tabs, setTabs] = useState([
    {
      tab: 'login',
      form: (
        <LoginForm
          handleNextStage={handleNextStage}
          handleModalInactive={handleModalInactive}
        />
      ),
    },
    { tab: 'join', form: <EmailForm handleNextStage={handleNextStage} /> },
    {
      tab: 'interest',
      form: <InterestForm handleNextStage={handleNextStage} />,
    },
    {
      tab: 'selfIntro',
      form: <SelfIntroduceForm handleNextStage={handleNextStage} />,
    },
    { tab: 'vertify', form: <MailVertifyForm /> },
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
      isLoggedIn={isLoggedIn}
    />
  )
}

export default HeaderContainer
