import React from 'react'
import styled from 'styled-components'
import { Input, ColumnBox, RowBox } from 'src/Components/Atoms'
import { whiteColor } from 'src/styles/Colors'
import { LabelInput } from 'src/Components/Molecules'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CreateStudy = () => {
  return (
    <Container>
      <RowBox width="952px" padding="40px" bgColor={whiteColor}>
        <ColumnBox width="562px" marginRight="30px">
          <LabelInput
            label="스터디 이름 (20자 이내)"
            placeholder="예) 포토샵 뽀개기"
            fontSize="13px"
            marginBottom="38px"
          />
          <LabelInput
            label="스터디 목표(30자 이내)"
            placeholder="예) 에어비엔비 UI분석"
            fontSize="13px"
            marginBottom="38px"
          />
        </ColumnBox>
        <ColumnBox width="280px">
          <Input placeholder="예) 포토샵 뽀개기" />
        </ColumnBox>
      </RowBox>
    </Container>
  )
}

export default CreateStudy
