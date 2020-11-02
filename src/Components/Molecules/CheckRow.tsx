import React from 'react'
import styled from 'styled-components'
import { AngularButton, BlueCheckbox, NormalText } from '../Atoms'

const Column = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr 1fr;
  align-content: center;
  justify-items: flex-start;
  padding: 0px 20px;
  height: 64px;
  border-bottom: 1px solid #e6e6e6;
  :last-child {
    border: none;
  }
`
interface CheckRowProps {
  id: string
  bindCheckbox: {
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  content: string
  createdAt: string
}

const CheckRow = ({ id, bindCheckbox, content, createdAt }: CheckRowProps) => {
  return (
    <Column>
      <BlueCheckbox htmlFor={id} {...bindCheckbox} />
      <NormalText text={content} fontSize="16px" fontColor="#333333" />
      <NormalText text={createdAt} fontSize="16px" fontColor="#b3b3b3" />
      <AngularButton text="스터디 보기" fontSize="14px" width="77px" />
    </Column>
  )
}

export default CheckRow
