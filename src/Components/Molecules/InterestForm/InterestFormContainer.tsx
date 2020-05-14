import React, { useState } from 'react'
import InterestFormViewer from './InterestFormViewer'
import { IInterestList, IInterestForm } from './types'
import {
  arrayToUnique,
  deleteSelectedItemInArray,
  arrayLengthLimits,
} from 'src/lib'

const InterestFormContainer = ({ handleNextStage }: IInterestForm) => {
  const [selectedInterest, setSelectedInterest] = useState<Array<string>>([])
  const [interestList, setInterestList] = useState([
    {
      category: '디자인',
      list: [
        {
          groupName: 'Design',
          groupItems: [
            { type: '디자인 전체', isActive: false },
            { type: 'UX · UI · GUI', isActive: false },
            { type: '공모전', isActive: false },
            { type: '3D', isActive: false },
            { type: '게임 · AR · VR', isActive: false },
            { type: 'Adobe 툴', isActive: false },
            { type: '기타', isActive: false },
          ],
        },
      ],
      isActive: true,
    },
    {
      category: '개발',
      list: [
        {
          groupName: 'Frontend',
          groupItems: [
            { type: 'React', isActive: false },
            { type: 'Vue', isActive: false },
            { type: 'AngularJs', isActive: false },
            { type: 'Svelt', isActive: false },
            { type: 'Jquery', isActive: false },
            { type: 'HTML · CSS', isActive: false },
            { type: '기타', isActive: false },
          ],
        },
        {
          groupName: 'Backend',
          groupItems: [
            { type: '전체', isActive: false },
            { type: 'Go', isActive: false },
            { type: 'Python', isActive: false },
            { type: 'NodeJs', isActive: false },
            { type: 'Java', isActive: false },
            { type: 'C#', isActive: false },
            { type: '기타', isActive: false },
            { type: '기타', isActive: false },
          ],
        },
        {
          groupName: 'Mobile',
          groupItems: [
            { type: 'android', isActive: false },
            { type: 'iOS', isActive: false },
            { type: 'React Native', isActive: false },
            { type: 'Flutter', isActive: false },
            { type: '기타', isActive: false },
            { type: '기타', isActive: false },
          ],
        },
      ],
      isActive: false,
    },
    {
      groupName: '영어',
      list: [
        { type: 'TOEIC', isActive: false },
        { type: 'TOEIC 스피킹', isActive: false },
        { type: 'IELTS', isActive: false },
        { type: '영어발표 · 면접', isActive: false },
        { type: '영어회화', isActive: false },
        { type: '영어번역 · 독해', isActive: false },
      ],
    },
    {
      category: '제2 외국어',
      list: [
        { type: 'TOEIC', isActive: false },
        { type: 'TOEIC 스피킹', isActive: false },
        { type: 'IELTS', isActive: false },
        { type: '영어발표 · 면접', isActive: false },
        { type: '영어회화', isActive: false },
        { type: '영어번역 · 독해', isActive: false },
      ],
      isActive: false,
    },
  ])

  const handleCurrentTab = (interest: IInterestList) => {
    const updateInterest = interestList.map((item) =>
      item.category === interest.category
        ? { ...interest, isActive: true }
        : { ...item, isActive: false },
    )
    setInterestList(updateInterest)
  }
  const handleSelectedInterest = (current: string) => {
    const updateCurrentTab = arrayToUnique([...selectedInterest, current])
    const limits = arrayLengthLimits(updateCurrentTab, 5)
    setSelectedInterest(limits)
  }
  const handleRemoveInterest = (selectedIndex: number) => {
    const updateSelectedInterest = deleteSelectedItemInArray(
      selectedInterest,
      selectedIndex,
    )
    setSelectedInterest(updateSelectedInterest)
  }
  return (
    <InterestFormViewer
      interestList={interestList}
      handleCurrentTab={handleCurrentTab}
      handleSelectedInterest={handleSelectedInterest}
      selectedInterest={selectedInterest}
      handleRemoveInterest={handleRemoveInterest}
      handleNextStage={handleNextStage}
    />
  )
}

export default InterestFormContainer
