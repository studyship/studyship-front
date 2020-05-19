import React from 'react'
import styled from 'styled-components'
import {
  Button,
  RowBox,
  NormalText,
  ColumnBox,
  Tag,
} from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'
import { IUnit, IInterestFormViewer } from './types'
import { getUniqueKey } from 'src/lib'

const Container = styled.div`
  padding: 0px 14px;
`
const Category = styled(RowBox)`
  flex-wrap: wrap;
  border: 1px solid ${mainColorBlue};
  border-radius: 5px;
`
const TabBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 26px;
  width: 25%;
  border-right: 1px solid ${mainColorBlue};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  ${(props: IUnit) =>
    props.isBorderStyle === 'true' &&
    `border-bottom: 1px solid ${mainColorBlue};`};
  ${(props: IUnit) =>
    props.isActive === 'true' &&
    `background-color:${mainColorBlue}; color:white;`};
  :nth-of-type(4n) {
    border-right: none;
  }
`
const Tab = styled(NormalText)`
  color: ${mainColorBlue};
  ${(props: IUnit) =>
    props.isActive === 'true' &&
    `background-color:${mainColorBlue}; color:white;`};
`
const List = styled(ColumnBox)``
const UnitBox = styled(RowBox)`
  flex-wrap: wrap;
`
const SelectBox = styled(RowBox)`
  flex-wrap: wrap;
  min-height: 76px;
  margin-top: 5px;
  margin-bottom: 25px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`
const FinishBtn = styled(Button)`
  border-radius: 33px;
  font-weight: bold;
  background-color: ${mainColorBlue};
`
const GroupName = styled.p`
  margin-top: 12px;
  margin-bottom: 4px;
  color: #6c6b6b;
  font-weight: 500;
  font-size: 12px;
`
const InterestFormViewer = ({
  interestList,
  handleCurrentTab,
  handleSelectedInterest,
  selectedInterest,
  handleRemoveInterest,
  handleNextStage,
}: IInterestFormViewer) => {
  return (
    <Container>
      <Category>
        {interestList.map((interest, index) => (
          <TabBox
            key={`${index}key`}
            isBorderStyle={`${index < 4 && interestList.length < 4}`}
            isActive={`${interest.isActiveCategory}`}
            onClick={() => {
              handleCurrentTab(interest.category)
            }}
          >
            <Tab
              isActive={`${interest.isActiveCategory}`}
              text={interest.category}
              fontSize="14px"
            />
          </TabBox>
        ))}
      </Category>
      <List>
        {interestList.map(
          (interest) =>
            interest.isActiveCategory &&
            interest.list.map((group, index) => (
              <React.Fragment key={getUniqueKey(index)}>
                <GroupName>{group.groupName}</GroupName>
                <UnitBox>
                  {group.groupItems.map((item, index) => (
                    <Tag
                      key={getUniqueKey(index)}
                      onClick={() => {
                        handleSelectedInterest(item.type)
                      }}
                      itemName={item.type}
                      isChoose={`${item.isActiveItem}`}
                      isActive={`${item.isActiveItem}`}
                    />
                  ))}
                </UnitBox>
              </React.Fragment>
            )),
        )}
      </List>
      <SelectBox>
        {selectedInterest.length > 0 &&
          selectedInterest.map((item, index) => (
            <Tag itemName={item.type} isChoose="true" isActive="true" />
          ))}
      </SelectBox>
      <FinishBtn
        text="완료"
        onClick={() => {
          handleNextStage('selfIntro')
        }}
      />
    </Container>
  )
}

export default InterestFormViewer
