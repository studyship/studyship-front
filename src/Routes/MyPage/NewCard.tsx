import React from 'react'
import styled from 'styled-components'
import { Icon } from 'src/Components/Atoms'
import plus from 'src/styles/icons/ss_icon_plus.svg'

const EmptyCard = styled.div`
  position: relative;
  height: 360px;
  width: 360px;
  border: 1px solid #b3b3b3;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CreateLabel = styled.p`
  margin-top: 28px;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.41px;
  color: #6c6b6b;
`

const NewCard = () => {
  return (
    <EmptyCard>
      <Center>
        <Icon imgSrc={plus} svgSize={88} />
        <CreateLabel>스터디 만들기</CreateLabel>
      </Center>
    </EmptyCard>
  )
}

export default NewCard
