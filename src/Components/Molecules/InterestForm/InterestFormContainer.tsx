import React, { useState } from 'react'
import InterestFormViewer from './InterestFormViewer'

const InterestFormContainer = () => {
  const [choiced, setChoiced] = useState<Array<string>>([])
  const [interestList, setInterestList] = useState([
    {
      category: '디자인',
      list: ['design1', 'design2', 'design3', 'design4', 'design5', 'design6'],
      isActive: 'true',
    },
    {
      category: '개발',
      list: ['dev1', 'dev2', 'dev3', 'dev4', 'dev5', 'dev6'],
      isActive: 'false',
    },
  ])
  const handleInterestChoiced = (interest: string) => {
    setChoiced([...choiced, interest])
  }
  const handleCurrentTab = (current: any) => {}
  return (
    <InterestFormViewer
      InterestList={interestList}
      handleInterestChoiced={handleInterestChoiced}
    />
  )
}

export default InterestFormContainer
