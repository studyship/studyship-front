import React from 'react'
import emptyHeart from 'src/styles/icons/ss_empty_heart.svg'
import fillHeart from 'src/styles/icons/ss_fill_heart.svg'
import { Icon } from '.'

interface HeartProps {
  isFill: boolean
  heartSize?: number
  onClick?: VoidFunction
}

const Heart = ({ isFill, onClick }: HeartProps) => {
  return (
    <Icon
      cursor="pointer"
      onClick={onClick}
      imgSrc={isFill ? fillHeart : emptyHeart}
    />
  )
}

export default Heart
