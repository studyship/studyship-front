import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { getFileExtentions } from 'src/lib'

const SLazyLoad = styled(LazyLoad)``
const Png = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  cursor: ${({ cursor }: StyleProps) => cursor && cursor};
`
const Svg = styled.img`
  border-radius: inherit;
  cursor: ${({ cursor }: StyleProps) => cursor && cursor};
`

type CursorType = 'pointer' | 'default' | undefined

type StyleProps = {
  cursor?: CursorType
}
type IconProps = {
  imgSrc: string
  onClick?: () => void
  cursor?: CursorType
}
const IconViewer = ({ imgSrc, onClick, cursor }: IconProps) => {
  // 레이지로딩 시 이미지가 새로 렌더링이 되지 않는 문재 해결 해야함
  return (
    <SLazyLoad>
      {getFileExtentions(imgSrc) === 'svg' ? (
        <Svg src={imgSrc} cursor={cursor} />
      ) : (
        <Png src={imgSrc} cursor={cursor} />
      )}
    </SLazyLoad>
  )
}

export default IconViewer
