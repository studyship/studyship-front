import styled, { css } from 'styled-components'

import { MarginStyleProps, PaddingStyleProps } from 'src/@types'

export const marginStyles = css<MarginStyleProps>`
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
`

export const paddingStyles = css<PaddingStyleProps>`
  padding-top: ${({ paddingTop }) => paddingTop && paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom && paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft && paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight && paddingRight};
`
