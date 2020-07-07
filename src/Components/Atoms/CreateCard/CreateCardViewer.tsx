import React from 'react'
import styled from 'styled-components'
import { RotatePlus, NormalText } from '..'
import { marginStyles } from 'src/styles/mixin'
import { MarginStyleProps } from 'src/@types'

const CreateCard = styled.div<MarginStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 360px;
  height: 360px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  cursor: pointer;
  ${marginStyles}
`

interface StyleProps extends MarginStyleProps {
  text: string
}

const CreateCardViewer = ({
  text,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: StyleProps) => {
  return (
    <CreateCard
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <RotatePlus isChoose={false} size="60px" />
      <NormalText
        text={text}
        fontSize="16px"
        marginTop="28px"
        fontColor="#6C6B6B"
      />
    </CreateCard>
  )
}

export default CreateCardViewer
