import React from 'react'
import styled from 'styled-components'
import { RowBox } from '..'
import { mainColorBlue } from 'src/styles/Colors'
import { getUniqueKey } from 'src/lib'

const StepSlider = styled(RowBox)<StyleProps>`
  position: relative;
  width: 100%;
  margin: 0px
    ${({ marginHorizontal }) => (marginHorizontal ? marginHorizontal : '10px')};
`
const DotWrapper = styled(RowBox)`
  justify-content: space-between;
  position: absolute;
  width: 100%;
`
const Dot = styled.div<StyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid
    ${({ isChoiced }) => (isChoiced ? `${mainColorBlue}` : '#b3b3b3')};
  background-color: ${({ isChoiced, choicedDotColor }) =>
    isChoiced
      ? choicedDotColor
        ? choicedDotColor
        : `${mainColorBlue}`
      : '#ffffff'};
`
const DotBar = styled.div<StyleProps>`
  width: 100%;
  height: ${({ barHeight }) => (barHeight ? barHeight : '1px')};
  background-color: #b3b3b3;
`

interface StyleProps {
  isChoiced?: boolean
  barHeight?: string
  dotSize?: string
  choicedDotColor?: string
  marginHorizontal?: string
}

interface StepSliderProps extends StyleProps {
  choiced: number
}

const StepSliderViewer = ({
  choiced,
  barHeight,
  dotSize,
  choicedDotColor,
  marginHorizontal,
}: StepSliderProps) => {
  return (
    <StepSlider marginHorizontal={marginHorizontal}>
      <DotBar barHeight={barHeight} />
      <DotWrapper>
        {Array.from({ length: 5 }, (_, index) => (
          <Dot
            key={getUniqueKey(index)}
            choicedDotColor={choicedDotColor}
            dotSize={dotSize}
            isChoiced={index === choiced}
          />
        ))}
      </DotWrapper>
    </StepSlider>
  )
}

export default StepSliderViewer
