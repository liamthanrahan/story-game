import { useState } from 'react'

function useCustomCount() {
  const [count, setCount] = useState(0)

  const setCustomCount = val => {
    setCount(val)
  }

  return [count, setCustomCount]
}

export default useCustomCount
