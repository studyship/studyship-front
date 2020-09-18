import { css } from 'styled-components'

import { MarginStyleProps, PaddingStyleProps } from 'src/@types'

export const marginStyles = css<MarginStyleProps>`
  ${({ margin, marginTop, marginBottom, marginLeft, marginRight }) =>
    margin
      ? `margin: ${margin}`
      : `margin-top: ${marginTop && marginTop};
  margin-bottom: ${marginBottom && marginBottom};
  margin-left: ${marginLeft && marginLeft};
  margin-right: ${marginRight && marginRight};`};
`

export const paddingStyles = css<PaddingStyleProps>`
  ${({ padding, paddingTop, paddingBottom, paddingLeft, paddingRight }) =>
    padding
      ? `padding: ${padding}`
      : `padding-top: ${paddingTop && paddingTop};
padding-bottom: ${paddingBottom && paddingBottom};
padding-left: ${paddingLeft && paddingLeft};
padding-right: ${paddingRight && paddingRight};`};
`
