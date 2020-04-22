import React from 'react'
import styled from 'styled-components'
import { NormalText, Button, RowBox, BoldText } from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'
import { IUnit } from './types'

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
  ${(props: IUnit) =>
    props.isActive === 'true' &&
    `color: ${mainColorBlue};
  border-bottom: 4px solid ${mainColorBlue};`};
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
  color: #b3b3b3;
`
const FinishBtn = styled(Button)`
  background-color: ${mainColorBlue};
`
interface IInterestList {
  category: string
  list: Array<string>
  isActive: string
}
type TInterestFormViewer = {
  InterestList: Array<IInterestList>
  handleInterestChoiced: (interest: string) => void
}

const InterestFormViewer = ({
  InterestList,
  handleInterestChoiced,
}: TInterestFormViewer) => {
  return (
    <Container>
      <TitleBox>
        <Title text="관심사 설정하기" fontSize="20px" />
        <Jump text="건너뛰기" fontSize="14px" />
      </TitleBox>
      <Info text="무엇을 배우고 싶으세요? (최대 5개)" fontSize="14px" />
      <Category>
        {InterestList.map((interest, index) => (
          <TabBox key={`${index}key`}>
            <Tab
              isActive={interest.isActive}
              fontSize="18px"
              text={interest.category}
            />
          </TabBox>
        ))}
      </Category>
      <List>
        {InterestList.map(
          (interest) =>
            interest.isActive === 'true' &&
            interest.list.map((item, index) => (
              <Unit key={`${index}key`}>{item}</Unit>
            )),
        )}
      </List>

      <FinishBtn text="완료" />
    </Container>
  )
}

export default InterestFormViewer
