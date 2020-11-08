import React, { useState } from 'react'
import { Heart } from 'src/Components/Atoms'
import { getUniqueKey } from 'src/lib'

const useFillHeart = () => {
  const [count, setCount] = useState(-1)
  const handleHeartClick = (target: number) => {
    setCount(target)
  }
  const renderFillHeart = () =>
    Array.from({ length: 5 }, () => <Heart isFill={true} />).map(
      (item, index) =>
        React.cloneElement(item, {
          key: getUniqueKey(index),
          isFill: index <= count,
          onClick: () => {
            handleHeartClick(index)
          },
        }),
    )
  return {
    renderFillHeart,
  }
}

export default useFillHeart
