import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { IIconViewer } from './types'
import { getFileExtentions } from 'src/lib'

const SLazyLoad = styled(LazyLoad)``
const Png = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`
const Svg = styled.img`
  border-radius: inherit;
`

const IconViewer = ({ imgSrc, svgSize, onClick }: IIconViewer) => {
  // 레이지로딩 시 이미지가 새로 렌더링이 되지 않는 문재 해결 해야함
  return (
    <SLazyLoad>
      {getFileExtentions(imgSrc) === 'svg' ? (
        <Svg src={imgSrc} width={svgSize} height={svgSize} />
      ) : (
        <Png src={imgSrc} />
      )}
    </SLazyLoad>
  )
}

export default IconViewer
