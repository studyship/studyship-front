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
  AccountChoiceForm,
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
      title: ['나랑 잘 맞는 스터디메이트,', '스터디쉽에서 간편하게 구해보세요'],
      subTitle: '물 흐르듯 쉽고 간단한 회원가입',
      horizontal: 'center',
      tab: 'login',
      form: (
        <LoginForm
          handleNextStage={handleNextStage}
          handleModalInactive={handleModalInactive}
        />
      ),
    },
    {
      title: '무슨 공부를 하고 싶으세요?',
      subTitle: '관심사 설정 (최대 5개)',
      horizontal: 'left',
      tab: 'interest',
      form: <InterestForm handleNextStage={handleNextStage} />,
    },
    {
      title: '회원가입',
      subTitle: '',
      horizontal: 'center',
      tab: 'join',
      form: <EmailForm handleNextStage={handleNextStage} />,
    },
    {
      title: 'ACCOUNT CHOICE',
      subTitle: '',
      horizontal: 'center',

      tab: 'choice',
      form: <AccountChoiceForm handleNextStage={handleNextStage} />,
    },
    {
      title: 'SELF INTRODUCE',
      subTitle: '',
      horizontal: 'center',
      tab: 'selfIntro',
      form: <SelfIntroduceForm handleNextStage={handleNextStage} />,
    },
    {
      title: 'VERTIFY',
      subTitle: '',
      horizontal: 'center',
      tab: 'vertify',
      form: <MailVertifyForm />,
    },
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
