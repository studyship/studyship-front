import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'

import { RowBox } from 'src/Components/Atoms'
import { ProfileHeader, ProfileCard } from 'src/Components/Molecules'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  @media screen and (max-width: 1919px) {
    width: 1160;
  }
  @media screen and (max-width: 1313px) {
    width: 800px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`
const Section = styled(RowBox)`
  padding: 40px 0px;
`

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
    <>
      <ProfileHeader handleSelected={handleSelected} selectIndex={selected} />
      <Container>
        <Section>
          <Col xs={3} sm={3} md={3} lg={3}>
            <ProfileCard />
          </Col>
          <Col xs={9} sm={9} md={9} lg={9} />
        </Section>
      </Container>
    </>
  )
}

export default ProfileViewer
