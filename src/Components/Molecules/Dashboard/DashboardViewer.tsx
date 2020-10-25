import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'

import { RowBox, SelectBox, NavTab, CreateCard } from 'src/Components/Atoms'
import {
  TabOptionTypes,
  SeletBoxBinderTypes,
  SelectBoxOptionTypes,
} from 'src/@types'
import { getUniqueKey } from 'src/lib'
import { CardFilter, CheckboxArea } from 'src/Components/Organizations'
import HoverCard from '../HoverCard'
import GroupSelectBox from '../GroupSelectBox'

const Dashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 34px;
`

type DashboardProps = {
  tabOptions: Array<TabOptionTypes>
  orderSelectBinder: SeletBoxBinderTypes
  categorySelectBinder: SeletBoxBinderTypes
  firstOptions: SelectBoxOptionTypes
  secondOptoins: SelectBoxOptionTypes
  handleNavTab: (selectedId: number) => void
}
const checks = [
  {
    id: '1',
    content: '내용0',
    createdAt: '20.10.10',
  },
  {
    id: '2',
    content: '내용1',
    createdAt: '20.10.10',
  },
  {
    id: '3',
    content: '내용2',
    createdAt: '20.10.10',
  },
]
const DashboardViewer = ({
  tabOptions,
  orderSelectBinder,
  categorySelectBinder,
  firstOptions,
  secondOptoins,
  handleNavTab,
}: DashboardProps) => {
  const selectOption = {
    firstOptions,
    orderSelectBinder,
    secondOptoins,
    categorySelectBinder,
  }
  return (
    <Dashboard>
      <Col md={6} lg={6} style={{ paddingLeft: '0px' }}>
        <TabWrapper>
          {tabOptions.map(({ title, isSelected, id }) => (
            <NavTab
              key={getUniqueKey(id)}
              text={title}
              isSelected={isSelected}
              onClick={() => {
                handleNavTab(id)
              }}
              activationColor="#333333"
              inactivationColor="#b3b3b3"
            />
          ))}
        </TabWrapper>
      </Col>

      {tabOptions.map(({ id, isSelected }) => {
        if (id === 0 && isSelected) return <CardFilter {...selectOption} />
        if (id === 1 && isSelected) return <CardFilter {...selectOption} />
        if (id === 2 && isSelected) return <CardFilter {...selectOption} />
        if (id === 3 && isSelected) return <CardFilter {...selectOption} />
        if (id === 4 && isSelected) return <CheckboxArea checkList={checks} />
        if (id === 5 && isSelected) return null
      })}
    </Dashboard>
  )
}

export default DashboardViewer
