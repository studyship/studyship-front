import React from 'react'
import styled from 'styled-components'

const ProfileTable = styled.div`
  margin-bottom: 47px;
`

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`

const TableLabel = styled.p`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.41px;
  color: #b3b3b3;
`

const TableValue = styled.p`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.41px;
  color: #333333;
`

const Table = () => {
  return (
    <ProfileTable>
      <ProfileRow>
        <TableLabel>전화번호</TableLabel>
        <TableValue>010-3087-2656</TableValue>
      </ProfileRow>
      <ProfileRow>
        <TableLabel>선호지역</TableLabel>
        <TableValue>서울, 서초구</TableValue>
      </ProfileRow>
      <ProfileRow>
        <TableLabel>희망(직무)</TableLabel>
        <TableValue>풀스텍 디자이너</TableValue>
      </ProfileRow>
    </ProfileTable>
  )
}

export default Table
