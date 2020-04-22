import React from 'react'
import styled from 'styled-components'
import {
  NormalText,
  Button,
  RowBox,
  BoldText,
  Icon,
} from 'src/Components/Atoms'
import { mainColorBlue, mainColorBlack } from 'src/styles/Colors'
import { IUnit, TInterestFormViewer } from './types'
import closeBlueIcon from 'src/styles/icons/close_blue.png'
import checkExistenceOfItem from 'src/lib/checkExistenceOfItem'
import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.div``
const TitleBox = styled(RowBox)`
  justify-content: space-between;
`
const Title = styled(NormalText)`
  margin-bottom: 4px;
`
const Jump = styled(NormalText)`
  color: #b3b3b3;
  cursor: pointer;
`
const Info = styled(NormalText)`
  margin-bottom: 28px;
  color: #666666;
`
const Category = styled(RowBox)`
  margin-bottom: 23px;
`
const TabBox = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`
const Tab = styled(BoldText)`
  display: inline-block;
  border-bottom: 4px solid transparent;
  ${(props: IUnit) =>
    props.isActive === 'true' &&
    `color:${mainColorBlue}; border-bottom:4px solid ${mainColorBlue}`};
  cursor: pointer;
`
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const Unit = styled.li`
  width: 25%;
  margin-bottom: 30px;
  text-align: center;
  font-size: 15px;
  color: #b3b3b3;
  ${dragLock};
  ${(props: IUnit) =>
    props.isActive === 'true' && `color:${mainColorBlack}; font-weight:bold;`};
  cursor: pointer;
`
const SelectBox = styled(RowBox)`
  flex-wrap: wrap;
  margin-bottom: 25px;
`
const Select = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.3em;
  padding: 10px 15px;
  border: 2px solid #bfedf3;
  border-radius: 50px;
`
const ChoiceItem = styled(BoldText)`
  margin-left: 3px;
  margin-right: 8px;
  color: ${mainColorBlue};
`
const FinishBtn = styled(Button)`
  background-color: ${mainColorBlue};
`
const CloseBlueIcon = styled.div`
  cursor: pointer;
`
const InterestFormViewer = ({
  interestList,
  handleCurrentTab,
  handleSelectedInterest,
  selectedInterest,
  handleRemoveInterest,
}: TInterestFormViewer) => {
  return (
    <Container>
      <TitleBox>
        <Title text="관심사 설정하기" fontSize="20px" />
        <Jump text="건너뛰기" fontSize="14px" />
      </TitleBox>
      <Info text="무엇을 배우고 싶으세요? (최대 5개)" fontSize="14px" />
      <Category>
        {interestList.map((interest, index) => (
          <TabBox key={`${index}key`}>
            <Tab
              onClick={() => {
                handleCurrentTab(interest)
              }}
              isActive={`${interest.isActive}`}
              fontSize="18px"
              text={interest.category}
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
      {selectedInterest.length > 0 && (
        <SelectBox>
          {selectedInterest.map((item, index) => (
            <Select key={`${index}key`}>
              <ChoiceItem text={item} fontSize="15px" />
              <CloseBlueIcon
                onClick={() => {
                  handleRemoveInterest(index)
                }}
              >
                <Icon imgSrc={closeBlueIcon} />
              </CloseBlueIcon>
            </Select>
          ))}
        </SelectBox>
      )}
      <FinishBtn text="다음~?" />
    </Container>
  )
}

export default InterestFormViewer
