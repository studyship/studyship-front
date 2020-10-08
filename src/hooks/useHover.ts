import { useState, useRef, useEffect } from 'react'

const useHover = <T extends HTMLElement>() => {
  const [isHover, setIsHover] = useState(false)

  const ref = useRef<T>(null)

  const handleMouseOver = () => setIsHover(true)
  const handleMouseOut = () => setIsHover(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseenter', handleMouseOver)
      node.addEventListener('mouseleave', handleMouseOut)

      return () => {
        node.removeEventListener('mouseenter', handleMouseOver)
        node.removeEventListener('mouseleave', handleMouseOut)
      }
    }
  }, [ref.current])

  return { ref, isHover }
}

export default useHover
