import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Button } from 'src/Components/Atoms'
import { useDimmer } from 'src/hooks'
import { Card } from '.'

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
`
const HoverButton = styled(Button)`
  :hover {
    background-color: #ffc545;
  }
`

const HoverCard = () => {
  const { ref, renderDimmer: render } = useDimmer<HTMLDivElement>()
  const dimmerBtn = useMemo(
    () =>
      React.cloneElement(
        <HoverButton
          marginBottom="16px"
          width="136px"
          height="36px"
          fontWeight="600"
          fontColor="#333333"
        />,
      ),
    [],
  )

  const onDimmerEls = (
    <BtnWrapper>
      {React.cloneElement(dimmerBtn, { text: '스터디 보기' })}
      {React.cloneElement(dimmerBtn, { text: '스터디 수정' })}
      {React.cloneElement(dimmerBtn, { text: '멤버 관리' })}
    </BtnWrapper>
  )

  const renderDimmer = () => render(onDimmerEls)

  return <Card hoverRef={ref} renderDimmer={renderDimmer} />
}

export default HoverCard
