import React from 'react'
import { useActivationTabs } from 'src/hooks'
import useRouter from 'src/hooks/useRouter'
import MediaSize from './MediaSize'

interface SubNavigatorProps {
  children: JSX.Element
}
const SubNavigator = ({ children }: SubNavigatorProps) => {
  const { match } = useRouter()
  const { renderTabNavs } = useActivationTabs(
    [
      {
        name: '프로필',
        to: '/profile',
        key: '/profile',
      },
      {
        name: '스터디 신청 현황',
        to: '/status',
        key: '/status',
      },
      {
        name: '설정',
        to: '/setting',
        key: '/setting',
      },
    ],
    match.path,
  )
  return (
    <>
      {renderTabNavs()}
      <MediaSize>{children}</MediaSize>
    </>
  )
}

export default SubNavigator
