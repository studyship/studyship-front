import { useState, useRef, useEffect } from 'react'

const useHover = <T extends HTMLElement>() => {
  const [isHover, setIsHover] = useState(false)

  const ref = useRef<T>(null)

  const handleMouseOver = () => setIsHover(true)
  const handleMouseOut = () => setIsHover(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current], // Recall only if ref changes
  )

  return { ref, isHover }
}

export default useHover
