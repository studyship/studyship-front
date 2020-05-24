import React from 'react'
import styled from 'styled-components'

const UnderlineText = styled.p`
  color: #b3b3b3;
  font-weight: normal;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

type UnderlineTextProps = {
  text: string
  onClick?: () => void
  className?: string
}

const UnderlineTextViewer = ({
  text,
  onClick,
  className,
}: UnderlineTextProps) => {
  return (
    <UnderlineText className={className} onClick={onClick}>
      {text}
    </UnderlineText>
  )
}

export default UnderlineTextViewer
