import React from 'react'
import styled from 'styled-components'
import { Header } from 'src/Components/Templates'
import { SelecteType } from 'src/Routes/Profile/ProfileViewer'

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Nav = styled.li<StyleProps>`
  margin-right: 24px;
  font-size: 18px;
  font-weight: normal;
  color: ${(props) => (props.selected ? '#333333' : '#b3b3b3')};
  cursor: pointer;
`
interface StyleProps {
  selected?: boolean
}
interface ProfileHeaderProps {
  handleSelected: (selectIndex: SelecteType) => void
  selectIndex: SelecteType
}

const ProfileHeaderViewer = ({
  handleSelected,
  selectIndex,
}: ProfileHeaderProps) => {
  return (
    <Header>
      <NavWrapper>
        <Nav
          onClick={() => {
            handleSelected(SelecteType.profile)
          }}
          selected={SelecteType.profile === selectIndex}
        >
          프로필
        </Nav>
        <Nav
          onClick={() => {
            handleSelected(SelecteType.studyStatus)
          }}
          selected={SelecteType.studyStatus === selectIndex}
        >
          스터디 신청 현황
        </Nav>
        <Nav
          onClick={() => {
            handleSelected(SelecteType.setting)
          }}
          selected={SelecteType.setting === selectIndex}
        >
          설정
        </Nav>
      </NavWrapper>
    </Header>
  )
}

export default ProfileHeaderViewer
