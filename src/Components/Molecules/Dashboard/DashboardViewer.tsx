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
import HoverCard from '../HoverCard'

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
const SelectBoxWrapper = styled(RowBox)``
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const DashboardViewer = ({
  tabOptions,
  orderSelectBinder,
  categorySelectBinder,
  firstOptions,
  secondOptoins,
  handleNavTab,
}: DashboardProps) => {
  return (
    <Dashboard>
      <Col md={6} lg={6}>
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
        <SelectBoxWrapper marginTop="35px">
          <SelectBox
            options={firstOptions}
            selectBoxBinder={orderSelectBinder}
            marginRight="10px"
            width="100px"
          />
          <SelectBox
            options={secondOptoins}
            selectBoxBinder={categorySelectBinder}
            width="100px"
          />
        </SelectBoxWrapper>
      </Col>
      <CardWrapper>
        <CreateCard text="스터디 만들기" />
        <HoverCard />
      </CardWrapper>
    </Dashboard>
  )
}

export default DashboardViewer
