import React from 'react'
import { NormalText } from 'src/Components/Atoms'
import {
  GridRow,
  GridRowTable,
  ProfileSubNavigator,
} from 'src/Components/Templates'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 70px;
  padding: 0px 90px;
`

const StudyDashboard = () => {
  const gridColumns = '3fr 1.2fr 1.2fr 2.6fr'
  const columnNames = ['신청한 스터디', '진행일', '진행 상태']
  const rowElements = Array.from({ length: 5 }, () => (
    <GridRow gridColumns={gridColumns}>
      <NormalText
        text="피그마 왕초보 스터디"
        fontSize="16px"
        fontColor="#333333"
      />
      <NormalText text="2020.10.10" fontSize="16px" fontColor="#B3B3B3" />
      <NormalText text="수락함" fontSize="16px" fontColor="#6C6B6B" />
    </GridRow>
  ))

  return (
    <ProfileSubNavigator>
      <Wrapper>
        <GridRowTable
          bgColor="#60DEE0"
          fontColor="#ffffff"
          gridColumns={gridColumns}
          columnNames={columnNames}
          rowElements={rowElements}
        />
      </Wrapper>
    </ProfileSubNavigator>
  )
}

export default StudyDashboard
