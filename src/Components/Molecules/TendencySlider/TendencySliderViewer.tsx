import React from 'react'
import styled from 'styled-components'
import { RowBox, NormalText, StepSlider } from 'src/Components/Atoms'

const Tendency = styled(RowBox)`
  width: 100%;
  margin-bottom: 10px;
`

interface StyleProps {
  fontSize?: string
  textWidth?: string
  wrap?: boolean
}
interface TendencyProps extends StyleProps {
  lowText: string
  highText: string
}
const TendencySliderViewer = ({
  fontSize,
  textWidth,
  wrap,
  lowText,
  highText,
}: TendencyProps) => {
  return (
    <Tendency>
      <NormalText
        fontColor="#B3B3B3"
        fontSize={fontSize}
        text={lowText}
        wrap={wrap}
        width={textWidth}
      />
      <StepSlider choiced={3} />
      <NormalText
        fontColor="#B3B3B3"
        fontSize={fontSize}
        text={highText}
        wrap={wrap}
        width={textWidth}
      />
    </Tendency>
  )
}

export default TendencySliderViewer
