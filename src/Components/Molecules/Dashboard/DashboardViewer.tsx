import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'
import { NavTab } from 'src/Components/Atoms'
import {
  TabOptionTypes,
  SeletBoxBinderTypes,
  SelectBoxOptionTypes,
} from 'src/@types'
import { getUniqueKey } from 'src/lib'
import { CardFilter, CheckboxArea } from 'src/Components/Organizations'
import { useCheckList } from 'src/hooks'
import Members from '../Members'

const Dashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;
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
  const { checkedValue, renderCheckbox } = useCheckList(checks)
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
        if (id === 4 && isSelected)
          return <CheckboxArea rowElements={renderCheckbox()} />
        if (id === 5 && isSelected) return <Members />
      })}
    </Dashboard>
  )
}

export default DashboardViewer
