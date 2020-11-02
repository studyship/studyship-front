import React from 'react'
import styled from 'styled-components'
import MemberCard from './MemberCard'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
`

const Members = () => {
  return (
    <Wrapper>
      <MemberCard username="devgw0" recommendation={true} />
      <MemberCard username="devgw1" recommendation={true} />
      <MemberCard username="devgw2" recommendation={true} />
      <MemberCard username="devgw3" recommendation={true} />
      <MemberCard username="devgw4" recommendation={true} />
      <MemberCard username="devgw5" recommendation={true} />
      <MemberCard username="devgw6" recommendation={true} />
    </Wrapper>
  )
}

export default Members
