import React from 'react'
import { ReactComponent as HeartIcon } from 'src/styles/icons/ss_heart.svg'
import { Icon } from '.'
interface HeartProps {
  isFill: boolean
  heartSize?: number
  onClick?: VoidFunction
}
const Heart = ({ isFill, onClick }: HeartProps) => {
  return (
    <HeartIcon
      onClick={onClick}
      cursor="pointer"
      {...(!isFill && {
        fill: 'none',
        stroke: '#b3b3b3',
        strokeWidth: '3',
      })}
    />
  )
}

export default Heart
