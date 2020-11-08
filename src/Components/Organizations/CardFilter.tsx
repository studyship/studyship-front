import React from 'react'
import styled from 'styled-components'
import { SeletBoxBinderTypes, SelectBoxOptionTypes } from 'src/@types'
import { CreateCard } from '../Atoms'
import { GroupSelectBox, HoverCard } from '../Molecules'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 34px;
`

interface CardFilterProps {
  orderSelectBinder: SeletBoxBinderTypes
  categorySelectBinder: SeletBoxBinderTypes
  firstOptions: SelectBoxOptionTypes
  secondOptoins: SelectBoxOptionTypes
}

const CardFilter = ({
  firstOptions,
  orderSelectBinder,
  secondOptoins,
  categorySelectBinder,
}: CardFilterProps) => {
  return (
    <>
      <GroupSelectBox
        firstOptions={firstOptions}
        orderSelectBinder={orderSelectBinder}
        secondOptoins={secondOptoins}
        categorySelectBinder={categorySelectBinder}
      />
      <CardWrapper>
        <CreateCard text="스터디 만들기" />
        <HoverCard />
        <HoverCard />
      </CardWrapper>
    </>
  )
}

export default CardFilter
