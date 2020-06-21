import React, { useState } from 'react'
import HeaderViewer from './MainHeaderViewer'
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

const MainHeaderContainer = () => {
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
      title: ['나랑 잘 맞는 스터디메이트,', '스터디쉽에서 간편하게 구해보세요'],
      subTitle: '물 흐르듯 쉽고 간단한 회원가입',
      horizontal: 'center',
      tab: 'choice',
      form: <AccountChoiceForm handleNextStage={handleNextStage} />,
    },
    {
      horizontal: 'center',
      tab: 'join',
      form: <EmailForm handleNextStage={handleNextStage} />,
    },
    {
      title: '무슨 공부를 하고 싶으세요?',
      subTitle: '관심사 설정 (최대 5개)',
      horizontal: 'left',
      tab: 'interest',
      form: <InterestForm handleNextStage={handleNextStage} />,
    },
    {
      title: '자기소개',
      subTitle: '한줄이라도 좋아요. 나를 소개해주세요.',
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
      isVisible={isVisible}
      handleModalActive={handleModalActive}
      handleModalInactive={handleModalInactive}
      handleNextStage={handleNextStage}
      currentTab={currentTab}
      isLoggedIn={isLoggedIn}
    />
  )
}

export default MainHeaderContainer
