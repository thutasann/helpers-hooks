// This file is For the TSX formatting
export const Welcome = () => {
  console.log('Welcome From my Doc')
}

import { time } from 'console'
import { useEffect, useState } from 'react'

export const useDebounce = (timeout = 500) => {
  const [timer, setTimer] = useState(0)

  const debounce = (fn: () => void) => {
    if (timer) clearTimeout(timer)
    const newTimer: any = setTimeout(() => fn(), timeout)
    setTimer(newTimer)
  }

  return { debounce }
}
