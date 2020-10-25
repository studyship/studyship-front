import React from 'react'
import styled from 'styled-components'
import MemberCard from './MemberCard'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const Members = () => {
  return (
    <Wrapper>
      <MemberCard recommendation={true} />
      <MemberCard recommendation={true} />
      <MemberCard recommendation={true} />
      <MemberCard recommendation={true} />
      <MemberCard recommendation={true} />
      <MemberCard recommendation={true} />
      <MemberCard recommendation={true} />
    </Wrapper>
  )
}

export default Members
