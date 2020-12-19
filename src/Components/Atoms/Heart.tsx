import React from 'react'
import { ReactComponent as HeartIcon } from 'src/styles/icons/ss_empty_heart.svg'
import fillHeart from 'src/styles/icons/ss_fill_heart.svg'

interface HeartProps {
  isFill: boolean
  heartSize?: number
  onClick?: VoidFunction
}

const Heart = ({ isFill, onClick }: HeartProps) => {
  return <HeartIcon onClick={onClick} cursor="pointer" fill="red" />
}

export default Heart
