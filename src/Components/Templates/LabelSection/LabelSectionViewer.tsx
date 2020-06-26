import React from 'react'
import styled from 'styled-components'
import { BoldText } from 'src/Components/Atoms'
import { PaddingStyleProps, MarginStyleProps } from 'src/@types'
import { marginStyles, paddingStyles } from 'src/styles/mixin'

const LabelSection = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  ${marginStyles};
  ${paddingStyles};
`
const Section = styled.div`
  display: flex;
  margin-top: 16px;
`

interface StyleProps extends MarginStyleProps, PaddingStyleProps {}

interface LabelSectionProps extends StyleProps {
  children: React.ReactChild | Array<React.ReactChild>
  labelText: string
  fontSize?: string
  fontColor?: string
}

const LabelSectionViewer = ({
  children,
  labelText,
  fontSize,
  fontColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: LabelSectionProps) => {
  return (
    <LabelSection
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      <BoldText
        text={labelText}
        fontSize={fontSize || '12px'}
        fontColor={fontColor || '#6C6B6B'}
      />
      <Section>{children}</Section>
    </LabelSection>
  )
}

export default LabelSectionViewer
