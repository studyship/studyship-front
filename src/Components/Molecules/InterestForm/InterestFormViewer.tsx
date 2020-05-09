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
import { IUnit, IInterestFormViewer } from './types'
import closeBlueIcon from 'src/styles/icons/close_blue.png'
import checkExistenceOfItem from 'src/lib/checkExistenceOfItem'
import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.div`
  padding: 0px 14px;
`
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
  color: ${mainColorBlue};
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
  font-size: 12px;
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
  border-radius: 33px;
  font-weight: bold;
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
  handleNextStage,
}: IInterestFormViewer) => {
  return (
    <Container>
      {/* <TitleBox>
        <Title text="관심사 설정하기" fontSize="20px" />
        <Jump
          text="건너뛰기"
          fontSize="14px"
          onClick={() => {
            handleNextStage('selfIntro')
          }}
        />
      </TitleBox>
      <Info text="무엇을 배우고 싶으세요? (최대 5개)" fontSize="14px" /> */}
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
            {/* <Tab
              
              fontSize="12px"
              text={interest.category}
            /> */}
            {interest.category}
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
