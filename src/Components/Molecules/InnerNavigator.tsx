import React from 'react'
import styled from 'styled-components'
import { getUniqueKey } from 'src/lib'
import { Link } from 'react-router-dom'
import { MediaSize } from 'src/Components/Templates'

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 100vw;
  left: 0;
  background-color: #ffffff;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  height: 59px;
`
const Tab = styled(Link)<StyleProps>`
  margin-right: 24px;
  font-size: 18px;
  font-weight: normal;
  color: ${({ isactivation }) => (isactivation ? '#333333' : '#b3b3b3')};
  cursor: pointer;
`
interface StyleProps {
  isactivation: number
}
interface ProfileHeaderProps {
  tabOptions: Array<{
    name: string
    isActivation: boolean
    to: string
  }>
  handleActivation: FunctionStringCallback
}

const ProfileHeaderViewer = ({
  tabOptions,
  handleActivation,
}: ProfileHeaderProps) => {
  const handleClick = (name: string) => () => {
    handleActivation(name)
  }
  return (
    <Container>
      <MediaSize>
        {tabOptions.map(({ name, isActivation, to }, index) => (
          <Tab
            onClick={handleClick(name)}
            isactivation={isActivation ? 1 : 0}
            to={to}
            key={getUniqueKey(index)}
          >
            {name}
          </Tab>
        ))}
      </MediaSize>
    </Container>
  )
}

export default ProfileHeaderViewer
