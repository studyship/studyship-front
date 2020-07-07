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

const Dashboard = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 38px;
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
  flex-wrap: wrap;
  margin-top: 5px;
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
      <Col xs={12} sm={6} md={10} lg={12}>
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
          <CreateCard
            text="스터디 만들기"
            marginRight="20px"
            marginTop="30px"
          />
        </CardWrapper>
      </Col>
    </Dashboard>
  )
}

export default DashboardViewer
