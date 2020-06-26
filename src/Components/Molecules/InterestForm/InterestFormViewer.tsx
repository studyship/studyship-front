import React from 'react'
import styled from 'styled-components'
import {
  Button,
  RowBox,
  NormalText,
  ColumnBox,
  ChoiceTag,
  UnderlineText,
} from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'
import { getUniqueKey } from 'src/lib'
import { HandleNextStageType, IUnit, InterestListTypes } from 'src/@types'
import increaseArrayLenght from 'src/lib/increaseArrayLenght'
import booleanToNumber from 'src/lib/booleanToNumber'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 14px;
`
const Category = styled(RowBox)`
  flex-wrap: wrap;
  border: 1px solid ${mainColorBlue};
  border-radius: 2px;
`
const TabBox = styled.div<IUnit>`
  display: flex;
  justify-content: center;
  padding: 8px 26px;
  width: 25%;
  border-right: 1px solid ${mainColorBlue};
  font-size: 12px;
  white-space: nowrap;
  cursor: ${({ cursorType }) => (cursorType ? cursorType : 'pointer')};
  ${({ isBorderStyle }) =>
    isBorderStyle && `border-bottom: 1px solid ${mainColorBlue};`};
  ${({ isActive }) =>
    isActive && `background-color:${mainColorBlue}; color:white;`};
  :nth-of-type(4n) {
    border-right: none;
  }
`
const Tab = styled(NormalText)<IUnit>`
  color: ${mainColorBlue};
  ${({ isActive }) =>
    isActive && `background-color:${mainColorBlue}; color:white;`};
`
const List = styled(ColumnBox)`
  width: 100%;
`
const UnitBox = styled(RowBox)`
  flex-wrap: wrap;
`
const SelectBox = styled(RowBox)`
  width: 100%;
  flex-wrap: wrap;
  min-height: 76px;
  margin-top: 20px;
  margin-bottom: 25px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`
const FinishBtn = styled(Button)`
  margin-bottom: 10px;
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

export interface InterestFormViewerProps extends HandleNextStageType {
  interestList: Array<InterestListTypes>
  handleCurrentTab: (category: string) => void
  handleSelectedInterest: (currentTab: string, toggleType: boolean) => void
}

const InterestFormViewer = ({
  interestList,
  handleCurrentTab,
  handleSelectedInterest,
  handleNextStage,
}: InterestFormViewerProps) => {
  return (
    <Container>
      <Category>
        {increaseArrayLenght(interestList, 8).map((interest, index) =>
          interest ? (
            <TabBox
              key={`${index}key`}
              isBorderStyle={booleanToNumber(index < 4)}
              isActive={booleanToNumber(interest.isActiveCategory)}
              onClick={() => {
                handleCurrentTab(interest.category)
              }}
            >
              <Tab
                isActive={booleanToNumber(interest.isActiveCategory)}
                text={interest.category}
                fontSize="14px"
              />
            </TabBox>
          ) : (
            <TabBox
              key={`${index}key`}
              cursorType="default"
              isBorderStyle={booleanToNumber(index < 4)}
              isActive={booleanToNumber(false)}
            >
              <Tab isActive={booleanToNumber(false)} text="-" fontSize="14px" />
            </TabBox>
          ),
        )}
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
                    <ChoiceTag
                      key={getUniqueKey(index)}
                      onClick={() => {
                        handleSelectedInterest(item.type, true)
                      }}
                      itemName={item.type}
                      isChoose={item.isActiveItem}
                      isActive={item.isActiveItem}
                    />
                  ))}
                </UnitBox>
              </React.Fragment>
            )),
        )}
      </List>
      <SelectBox>
        {interestList.map((interest) =>
          interest.list.map((group) =>
            group.groupItems.map(
              (item, index) =>
                item.isActiveItem && (
                  <ChoiceTag
                    key={getUniqueKey(index)}
                    itemName={item.type}
                    isChoose={true}
                    isActive={true}
                    onClick={() => {
                      handleSelectedInterest(item.type, false)
                    }}
                  />
                ),
            ),
          ),
        )}
      </SelectBox>
      <FinishBtn
        text="완료"
        onClick={() => {
          handleNextStage('selfIntro')
        }}
      />
      <UnderlineText
        text="건너뛰기"
        onClick={() => {
          handleNextStage('selfIntro')
        }}
      />
    </Container>
  )
}

export default InterestFormViewer
