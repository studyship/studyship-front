import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { IIconViewer } from './types'

const SLazyLoad = styled(LazyLoad)``
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const IconViewer = ({ imgSrc }: IIconViewer) => {
  // 레이지로딩 시 이미지가 새로 렌더링이 되지 않는 문재 해결 해야함
  return (
    <SLazyLoad>
      <Image src={imgSrc} />
    </SLazyLoad>
  )
}

export default IconViewer
