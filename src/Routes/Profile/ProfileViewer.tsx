import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import { RowBox, NavTab, SelectBox } from 'src/Components/Atoms'
import { ProfileHeader, ProfileCard } from 'src/Components/Molecules'

import { tabOptions as profileTabOptions, selectBoxOptions } from './options'
import { useHandleSelectTab, useSelectBox } from 'src/hooks'
import { getUniqueKey } from 'src/lib'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1570px;
  @media screen and (max-width: 1313px) {
    width: 1180px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`
const Section = styled(RowBox)`
  padding: 40px 0px;
  align-items: flex-start;
`
const ProfileContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 38px;
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

  const { tabOptions, onClick } = useHandleSelectTab(profileTabOptions)
  const { bind: selectBoxBinder } = useSelectBox(selectBoxOptions[0])

  return (
    <>
      <ProfileHeader handleSelected={handleSelected} selectIndex={selected} />
      <Container>
        <Section>
          <Col xs={0} sm={4} md={4} lg={3}>
            <CardWrapper>
              <ProfileCard />
            </CardWrapper>
          </Col>
          <Col xs={12} sm={6} md={10} lg={9}>
            <ProfileContent>
              <Col md={6} lg={6}>
                <TabWrapper>
                  {tabOptions.map(({ title, isSelected, id }) => (
                    <NavTab
                      key={getUniqueKey(id)}
                      text={title}
                      isSelected={isSelected}
                      onClick={() => {
                        onClick(id)
                      }}
                      activationColor="#333333"
                      inactivationColor="#b3b3b3"
                    />
                  ))}
                </TabWrapper>
                <SelectBox
                  options={selectBoxOptions}
                  selectBoxBinder={selectBoxBinder}
                />
              </Col>
            </ProfileContent>
          </Col>
        </Section>
      </Container>
    </>
  )
}

export default ProfileViewer
