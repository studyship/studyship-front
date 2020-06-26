import React from 'react'
import styled from 'styled-components'
import { NormalText } from 'src/Components/Atoms'
import { getUniqueKey } from 'src/lib'

const DetailProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Bio = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`

type DetailProfileProps = {
  phoneNumber: string
  favorAddress: string
  favorJob: string
}

const DetailProfileViewer = ({
  phoneNumber,
  favorAddress,
  favorJob,
}: DetailProfileProps) => {
  const details = [
    {
      tagName: '전화번호',
      value: phoneNumber,
    },
    {
      tagName: '선호지역',
      value: favorAddress,
    },
    {
      tagName: '(희망)직무',
      value: favorJob,
    },
  ]

  const isApplyMargin = (index: number) =>
    details.length - 1 !== index ? '24px' : '0px'

  return (
    <DetailProfile>
      {details.map((detail, index) => (
        <Bio key={getUniqueKey(index)}>
          <NormalText
            text={detail.tagName}
            fontColor="#B3B3B3"
            fontSize="16px"
            marginBottom={isApplyMargin(index)}
          />
          <NormalText
            text={detail.value}
            fontColor="#333333"
            fontSize="16px"
            marginBottom={isApplyMargin(index)}
          />
        </Bio>
      ))}
    </DetailProfile>
  )
}

export default DetailProfileViewer
