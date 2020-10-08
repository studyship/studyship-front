import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { getFileExtentions } from 'src/lib'
import { MarginStyleProps } from 'src/@types'

const SLazyLoad = styled(LazyLoad)``
const Png = styled.img<StyleProps>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  cursor: ${({ cursor }) => cursor && cursor};
`
const Svg = styled.img<StyleProps>`
  border-radius: inherit;
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  cursor: ${({ cursor }) => cursor && cursor};
`

type CursorType = 'pointer' | 'default' | undefined

interface StyleProps extends MarginStyleProps {
  cursor?: CursorType
}
interface IconProps extends StyleProps {
  imgSrc: string
  onClick?: () => void
  cursor?: CursorType
  svgSize?: number
}
const IconViewer = ({
  imgSrc,
  onClick,
  cursor,
  svgSize,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: IconProps) => {
  // 레이지로딩 시 이미지가 새로 렌더링이 되지 않는 문재 해결 해야함
  return getFileExtentions(imgSrc) === 'svg' ? (
    <Svg
      src={imgSrc}
      cursor={cursor}
      width={svgSize}
      height={svgSize}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  ) : (
    <Png
      src={imgSrc}
      cursor={cursor}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
}

export default IconViewer
