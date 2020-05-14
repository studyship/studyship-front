import React from 'react'
import styled from 'styled-components'
import { NormalText, Button, RowBox, RotatePlus } from 'src/Components/Atoms'
import { mainColorBlue, mainColorBlack } from 'src/styles/Colors'
import { IUnit, IInterestFormViewer } from './types'
import checkExistenceOfItem from 'src/lib/checkExistenceOfItem'
import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.div`
  padding: 0px 14px;
`
const Category = styled(RowBox)`
  flex-wrap: wrap;
  margin-bottom: 23px;
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
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const Unit = styled.li`
  margin-bottom: 8px;
  margin-right: 8px;
  padding: 6px 10px;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  color: #b3b3b3;
  ${dragLock};
  ${(props: IUnit) => props.isActive === 'true' && `color:${mainColorBlack};`};
  border-radius: 15px;
  border: 1px solid #b3b3b3;
  cursor: pointer;
`
const SelectBox = styled(RowBox)`
  flex-wrap: wrap;
  min-height: 76px;
  margin-bottom: 25px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`
const Select = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.3em;
  padding: 6px 10px;
  background-color: ${mainColorBlue};
  border-radius: 50px;
`
const ChoiceItem = styled(NormalText)`
  margin-left: 3px;
  margin-right: 5px;
  color: white;
`
const FinishBtn = styled(Button)`
  border-radius: 33px;
  font-weight: bold;
  background-color: ${mainColorBlue};
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
            isActive={`${interest.isActive}`}
            onClick={() => {
              handleCurrentTab(interest)
            }}
          >
            <Tab
              isActive={`${interest.isActive}`}
              text={interest.category}
              fontSize="14px"
            />
          </TabBox>
        ))}
      </Category>
      <List>
        {interestList.map(
          (interest) =>
            interest.isActive &&
            interest.list.map((item, index) => (
              <Unit
                key={`${index}key`}
                isActive={`${checkExistenceOfItem(selectedInterest, item)}`}
                onClick={() => {
                  handleSelectedInterest(item)
                }}
              >
                {item}
              </Unit>
            )),
        )}
      </List>
      <SelectBox>
        {selectedInterest.length > 0 &&
          selectedInterest.map((item, index) => (
            <Select key={`${index}key`}>
              <ChoiceItem text={item} fontSize="14px" />
              <RotatePlus isChoose={true} />
            </Select>
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
