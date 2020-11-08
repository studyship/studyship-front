import React from 'react'
import { AngularButton, BlueCheckbox, NormalText } from '../Atoms'
import { GridRow } from '../Templates'

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
    <GridRow>
      <BlueCheckbox htmlFor={id} {...bindCheckbox} />
      <NormalText text={content} fontSize="16px" fontColor="#333333" />
      <NormalText text={createdAt} fontSize="16px" fontColor="#b3b3b3" />
      <AngularButton text="스터디 보기" fontSize="14px" width="77px" />
    </GridRow>
  )
}

export default CheckRow
