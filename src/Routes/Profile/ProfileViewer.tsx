import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import { ProfileHeader } from 'src/Components/Molecules'

const Container = styled.div``

export enum SelecteType {
  profile = 0,
  studyStatus = 1,
  setting = 2,
}

const ProfileViewer = () => {
  const [selected, setSelected] = useState<SelecteType>(SelecteType.profile)

  const handleSelected = useCallback((selectIndex: SelecteType) => {
    setSelected(selectIndex)
  }, [])

  return (
    <Container>
      <ProfileHeader handleSelected={handleSelected} selectIndex={selected} />
    </Container>
  )
}

export default ProfileViewer
